import { Inter } from "next/font/google";
import "./globals.css";
import MouseClickEffect from "@/components/MouseClickEffect";
import { VolumeProvider } from "@/components/context/VolumeControlContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Milkyway",
  description: "Gaming platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="relative w-screen h-screen ">
          <div className="absolute top-1/2 left-1/2  rotate-90 sm:rotate-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[100vh] h-[100vw] sm:w-screen sm:h-screen">
            <MouseClickEffect />
            <VolumeProvider>{children}</VolumeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
