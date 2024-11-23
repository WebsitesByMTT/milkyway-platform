"use client";
import { config } from "../config";
import { setAvatar, setCredits } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

import toast from "react-hot-toast";
import Notification from "@/src/components/ui/Notification";

interface SocketContextType {
  socket: Socket | null;
}
const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

export const SocketProvider: React.FC<{
  token: string;
  children: React.ReactNode;
}> = ({ token, children }) => {
  const dispatch = useAppDispatch();
  const [socket, setSocket] = useState<Socket | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      // Use sessionStorage instead of localStorage for unique platformId per tab
      let platformId = sessionStorage.getItem("platformId");
      if (!platformId) {
        platformId = crypto.randomUUID(); // Generate a unique platformId
        sessionStorage.setItem("platformId", platformId);
      }

      const socketInstance = io(`${config.server}`, {
        auth: { token, origin: config.platform, platformId },
      });
      setSocket(socketInstance);

      socketInstance.on("connect", () => {
        console.log("Connected with socket id:", socketInstance.id);
      });

      socketInstance.on("data", (data: any) => {
        switch (data?.type) {
          case "CREDIT":
            dispatch(setCredits(data?.data?.credits));
            break;
          default:
        }
      });

      socketInstance.on("alert", (message: any) => {
        if (message == "ForcedExit") {
          router.push("/logout");
        } else if (message === "NewTab") {
          console.warn("ALERT : ", message);
          toast.custom(
            (t) => (
              <Notification
                visible={t.visible}
                message="You are already active in another tab."
              />
            ),
            { duration: Infinity } // Keep the notification open indefinitely
          );
        }
      });

      return () => {
        socketInstance.disconnect();
      };
    }
  }, [token]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
