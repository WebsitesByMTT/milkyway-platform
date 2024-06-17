import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { VolumeProvider } from "@/components/context/VolumeControlContext";
import { UserProvider } from "@/components/context/UserContext";
import AudioPlayer from "@/components/ui/AudioPlayer";
import Image from "next/image";

export default async function RootLayout({ children }) {
  return (
    <UserProvider>
      <VolumeProvider>
        <main className="relative w-full overflow-hidden ">
          <div className="wave-bg w-full h-full absolute top-0 left-0"></div>
          <Image
            src={"/bg1.png"}
            fill
            alt="bg"
            priority={true}
            quality={100}
            objectPosition="center"
            className="z-[-2] object-cover"
          />
          <Header />
          <div className=" relative">
            <Sidebar />
            {children}
          </div>
          <Footer />
          <AudioPlayer />
        </main>
      </VolumeProvider>
    </UserProvider>
  );
}
