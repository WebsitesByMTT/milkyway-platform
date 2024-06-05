"use server";
import GameIframe from "@/components/GameIframe";
import { redirect } from "next/navigation";

async function getGameById(gameId) {
  const res = await fetch(`http://localhost:3000/api/games/${gameId}`);

  if (!res.ok) {
    return undefined;
  }
  return res.json();
}

const page = async ({ params }) => {
  const { game } = params;
  const data = await getGameById(game);

  if (!data) {
    redirect("/");
  }

  return (
    <div className="w-full h-full">
      <GameIframe data={data} />
    </div>
  );
};

export default page;
