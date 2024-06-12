import Game from "@/components/Game";
import { getGames } from "@/utils/actions";

const Home = async ({ searchParams }) => {
  const { category } = searchParams;
  const gamesCategory = category || "all";
  const games = await getGames(gamesCategory);

  return <Game data={games} />;
};

export default Home;
