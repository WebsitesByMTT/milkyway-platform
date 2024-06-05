import CreateError from "@/utils/Error";
import data from "@/utils/data";
import { NextResponse } from "next/server";

export const GET = async (request, response, { params }) => {
  const { gameId } = params;

  try {
    const game = data.find((item) => item.gameName === gameId);
    if (!game || game === undefined) {
      throw new CreateError(204, "No Game Found");
    }
    return NextResponse.json({ game }, { status: 200 });
  } catch (err) {
    if (err.statusCode === 204) {
      return new NextResponse(null, { status: 204 });
    } else {
      return NextResponse.json(
        { error: err.message },
        { status: err.statusCode }
      );
    }
  }
};
