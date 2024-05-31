import Footer from "@/components/Footer";
import Game from "@/components/Game";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-screen h-screen flex items-center justify-center">
      <div className=" max-w-screen  w-full flex-1  relative">
        <Image
          src={"/bg.png"}
          fill
          alt="bg"
          priority={true}
          objectFit="cover" 
          quality={100}
          objectPosition="center"
        />

        <div className=" relative">
          <Header />

          <Game />

          <Footer />
        </div>
      </div>
    </main>
  );
}
