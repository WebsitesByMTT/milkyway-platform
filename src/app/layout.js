import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import MouseClickEffect from "@/components/MouseClickEffect";
import { Toaster } from "react-hot-toast";
import AudioPlayer from "@/components/ui/AudioPlayer";
import { VolumeProvider } from "@/components/context/VolumeControlContext";
import { UserProvider } from "@/components/context/UserContext";

const barlowCondensed = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata = {
  title: "El Dorado Spin",
  description: "Gaming platform",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${barlowCondensed.className}`}>
        <div className="relative w-screen h-screen cursor-custom">
          <div className="absolute top-1/2 left-1/2 rotate-90 sm:rotate-0 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[100vh] h-[100vw] sm:w-screen sm:h-screen">
            <UserProvider>
              <VolumeProvider>
                <MouseClickEffect />
               
                     {children}
               
                <Toaster
                  containerClassName="m-0 flex items-center justify-center"
                  containerStyle={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  toastOptions={{
                    duration: 3,
                  }}
                />
                <AudioPlayer />
                <div id="modal"></div>
              </VolumeProvider>
            </UserProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
