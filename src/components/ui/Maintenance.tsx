import React, { useEffect, useRef, useState } from "react";

interface MaintenanceProps {
  data: {
    availableAt: string; // Ensure this matches the expected type
  };
  reload: boolean; // Add this to the props
  setReload: (reload: boolean) => void; // Function to update reload state
}

const Maintenance: React.FC<MaintenanceProps> = ({
  data,
  reload,
  setReload,
}) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (data.availableAt) {
      const availableDate = new Date(data.availableAt);
      const now = new Date();

      const difference = availableDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeRemaining(difference);

        intervalId.current = setInterval(() => {
          setTimeRemaining((prev) => prev - 1000);
        }, 1000);

        return () => {
          if (intervalId.current) {
            clearInterval(intervalId.current);
          }
        };
      }
    }
  }, [data.availableAt]);

  useEffect(() => {
    if (timeRemaining < 0) {
      setReload(true);
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    }
  }, [timeRemaining, setReload]);

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.max(Math.floor(milliseconds / 1000), 0);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
      2,
      "0"
    )} : ${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-[1.5vw]">
      {timeRemaining > 0 ? (
        <>
          <p className="text-white text-[2.5vw]">We will be back in</p>
          <p className="text-white text-[6vw] px-[2vw] py-[1vw] bg-gradient-to-b from-[#98f0fe60] via-[#4191e788] to-[#69d2f871] border-[0.2vw] w-[60%] min-w-fit text-center rounded-[2vw] font-semibold text-stroke-3">
            {formatTime(timeRemaining)}
          </p>
        </>
      ) : (
        <p className="text-white text-[3vw] px-[2vw] py-[1vw] bg-gradient-to-b from-[#98f0fe60] via-[#4191e788] to-[#69d2f871] border-[0.2vw] w-[60%] min-w-fit text-center rounded-[2vw] text-stroke-3 font-bold">
          The platform is now available 🎉
        </p>
      )}
    </div>
  );
};

export default Maintenance;
