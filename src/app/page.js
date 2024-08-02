import React from "react";
import Games from "@/components/Games";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchGames } from "@/utils/actions";
import { getCategory } from "@/utils/utils";

const Home = async () => {
  const Category = await getCategory()
  const initialGames = await fetchGames(Category);
   
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
      <Games initialGames={initialGames} />
      <Footer />
    </main>
  );
};

export default Home;
