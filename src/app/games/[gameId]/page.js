"use server";
import GameIframe from "@/components/GameIFrame";
import { getGameById } from "@/utils/actions";
import { notFound, redirect } from "next/navigation";

const page = async ({ params }) => {
  const { gameId } = params;
  const data = await getGameById(gameId);

  if (data.game === null) {
    notFound(true);
  }

  return (
    <div className="w-full h-full">
      <GameIframe data={data} />{" "}
    </div>
  );
};

export default page;
