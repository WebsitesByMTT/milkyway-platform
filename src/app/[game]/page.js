"use server";
import GameIframe from "@/components/GameIFrame";
import { redirect } from "next/navigation";
import { getGameById } from "../../utils/actions";

const page = async ({ params }) => {
  const { game } = params;
  const data = await getGameById(game);

  if (data.game === null) {
    redirect("/");
  }

  return (
    <div className="w-full h-full">
      <GameIframe data={data} />
    </div>
  );
};

export default page;
