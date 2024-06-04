import Footer from "@/components/Footer";
import Game from "@/components/Game";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative border w-full">
      <div class="animated">
        <div class="wrapper">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
        </div>
      </div>
      <Image
        src={"/bg1.png"}
        fill
        alt="bg"
        priority={true}
        objectFit="cover"
        quality={100}
        objectPosition="center"
       className="z-[-2]"
      />
      <Header />
      <Game />
      <Footer />
    </main>
  );
}
