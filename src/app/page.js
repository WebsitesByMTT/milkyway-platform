import React from "react";
import { cookies } from "next/headers";
import { config } from "@/utils/config";
import Games from "@/components/Games";
import { UserProvider } from "@/components/context/UserContext";
import { VolumeProvider } from "@/components/context/VolumeControlContext";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/ui/AudioPlayer";
import { fetchGames } from "@/utils/actions";

const Home = async () => {
  const initialGames = await fetchGames();
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
          <Games initialGames={initialGames} />
          <Footer />
          <AudioPlayer />
        </main>
      </VolumeProvider>
    </UserProvider>
  );
};

export default Home;
