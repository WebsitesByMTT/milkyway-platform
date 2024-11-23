import Image from "next/image";
import React from "react";
import Link from "next/link";

interface FeaturedGameCardProps {
  src: {
    slug: string;
    thumbnail: string;
  };
}

const FeaturedGameCard: React.FC<FeaturedGameCardProps> = ({ src }) => {
  return (
    <Link href={`/${src.slug}`}>
      <div className="relative bg-gradient-to-br rounded-[1vw] from-blue-900 to-indigo-900 w-full h-full">
        <Image
          src={src?.thumbnail}
          fill
          className=" w-full h-full object-cover rounded-[1vw]"
          alt={src.slug}
        />
      </div>
    </Link>
  );
};

export default FeaturedGameCard;
