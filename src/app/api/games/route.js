import data from "@/utils/data";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("category");

    console.log("searchParams : ", query);

    if (query) {
      const filteredGames = data.filter((game) => game.category === query);
      return NextResponse.json(filteredGames);
    }

    return NextResponse.json(data);
  } catch (err) {
    throw new Error("Failed to fetch games");
  }
};
