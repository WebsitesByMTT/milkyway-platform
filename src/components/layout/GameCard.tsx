import FavButton from "../ui/FavButton";
import Link from "next/link";
import GameCardImg from "./GameCardImg";

interface GameCardProps {
  favgame: { _id: string }[]; // Array of favorite game IDs
  src: {
    _id: string;
    slug: string;
    thumbnail: string;
  };
  type: string; // Type of the game (e.g., category or other relevant type)
}

const GameCard: React.FC<GameCardProps> = ({ favgame, src, type }) => {
  return (
    <>
      <Link
        href={`/${src.slug}`}
        className="w-full h-[27vw] sm:h-[14.5vw] gamecard relative z-[2]"
      >
        <FavButton favgame={favgame} id={src?._id} />
        <GameCardImg src={src?.thumbnail} type={type} />
      </Link>
    </>
  );
};

export default GameCard;
