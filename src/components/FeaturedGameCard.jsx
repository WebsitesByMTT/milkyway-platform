import Image from "next/image";
import React from "react";
import Link from "next/link";

const FeaturedGameCard = ({ src }) => {
  return (
    <Link href={`/${src._id}`} className="w-[20%] h-auto py-[3%] ">
      <div className="w-[90%] h-full rounded-[6%] p-[2%] bg-[#B18423] shadow-lg ">
        <div className="bg-[#DC6E0E] rounded-[6%] w-full h-full p-[3%]">
          <div className="bg-gradient-to-b p-[2%] rounded-[6%] from-[#EFC54C] shadow-lg via-[#F98F08] to-[#943E00] w-full h-full">
            <div className="relative bg-gradient-to-br rounded-[6%] from-blue-900 to-indigo-900 w-full h-full">
              <Image
                src={src?.gameThumbnailUrl}
                className="rounded-xl object-cover"
                fill
                alt="game-img"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedGameCard;
