import Games from "@/components/Games";
import { config } from "@/utils/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getGames(category) {
  "use server";
  const token = cookies().get("token")?.value;

  try {
    const response = await fetch(
      `${config.server}/api/games/getGames?category=${category}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `userToken=${token}`,
        },
      },
      { cache: "force-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    redirect("/logout");
  }
}

const Home = async ({ searchParams }) => {
  const { category } = searchParams;
  const gamesCategory = category || "all";
  const games = await getGames(gamesCategory);

  return <Games data={games} />;
};

export default Home;
