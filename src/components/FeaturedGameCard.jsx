import Image from "next/image";
import React from "react";
import Link from "next/link";

const FeaturedGameCard = ({ src }) => {
  return (
    <Link href={`/${src.slug}`}>
      <div className="bg-gradient-to-b p-[2%] rounded-[6%] from-[#EFC54C] shadow-lg via-[#F98F08] to-[#943E00] w-full h-full">
        <div className="relative bg-gradient-to-br rounded-[6%] from-blue-900 to-indigo-900 w-full h-full">
          <Image
            src={src?.thumbnail}
            fill
            className=" w-full h-full object-cover rounded-[6%]"
            alt={src.slug}
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedGameCard;
