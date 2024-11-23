import GameFrame from "@/src/components/layout/GameFrame";
import { getGameById } from "@/src/lib/actions";
import React from "react";

interface PageProps {
  params: {
    gameId: string;
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { gameId } = params;
  const src = await getGameById(gameId);

  return <GameFrame data={src} />;
};

export default Page;
