import "../globals.css";
import { getCookie } from "@/utils/utils";
import StoreProvider from "@/components/redux/provider";
import SocketProvider from "@/components/socket/SocketProvider";

export const metadata = {
  title: "El Dorado Spin",
  description: "Gaming platform",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getCookie();

  return (
    <main className="relative w-full h-full flex items-center justify-center flex-col">
      <StoreProvider>
        <SocketProvider token={token as string}>{children}</SocketProvider>
      </StoreProvider>
    </main>
  );
}