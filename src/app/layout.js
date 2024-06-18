import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import MouseClickEffect from "@/components/MouseClickEffect";
import { Toaster } from "react-hot-toast";
import Notification from "@/components/ui/Notification";

const barlowCondensed = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata = {
  title: "Milkyway",
  description: "Gaming platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.className}`}>
        <div className="relative w-screen h-screen cursor-custom">
          <div className="absolute top-1/2 left-1/2  rotate-90 sm:rotate-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[100vh] h-[100vw] sm:w-screen sm:h-screen">
            <MouseClickEffect />
            {children}
            <Toaster
              containerClassName="m-0"
              containerStyle={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              toastOptions={{
                duration: 0.8,
              }}
            />
            <div id="modal"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
