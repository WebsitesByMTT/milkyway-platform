import React from "react";
import Games from "@/components/Games";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGames } from "@/utils/actions";

const Home = async () => {
  const initialGames = await fetchGames();
  const favGames = await fetchGames('fav');
  return (

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
      <Games favgame={favGames?.others} initialGames={initialGames} />
      <Footer />
    </main>

  );
};

export default Home;
