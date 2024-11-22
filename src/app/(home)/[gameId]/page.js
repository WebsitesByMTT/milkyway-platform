import React from "react";
import { getGameById } from "@/utils/actions";
import GameFrame from "@/components/GameFrame";

const page = async ({ params }) => {
  const { gameId } = params;
  const src = await getGameById(gameId);

  return <GameFrame data={src} />;
};

export default page;
