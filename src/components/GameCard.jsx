import Image from "next/image";
import FavButton from "./ui/FavButton";
import Link from "next/link";
import GameCardImg from "./GameCardImg";

const GameCard = ({ src, type }) => {
  return (
    <>
      <Link
        href={`/${src.slug}`}
        className="w-full h-[27vw] sm:h-[14.5vw] gamecard relative z-[2]"
      >
        <FavButton id={src?._id} />
        <GameCardImg src={src?.thumbnail} type={type} />
      </Link>
    
    </>
  );
};

export default GameCard;
