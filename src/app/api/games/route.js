import data from "@/utils/data";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    return NextResponse.json(data);
  } catch (err) {
    throw new Error("Failed to fetch games");
  }
};
