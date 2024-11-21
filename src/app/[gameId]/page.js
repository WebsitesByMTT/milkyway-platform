import React from "react";
import { getGameById } from "@/utils/actions";
import GameFrame from "@/components/GameFrame";
import { getCookie } from "@/utils/utils";
import StoreProvider from "@/components/redux/provider";
import SocketProvider from "@/components/socket/SocketProvider";

const page = async ({ params }) => {
  const { gameId } = params;
  const src = await getGameById(gameId);
  const token = await getCookie();

  return <StoreProvider>
    <SocketProvider token={token}><GameFrame data={src} /></SocketProvider></StoreProvider>;
};

export default page;
