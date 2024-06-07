"use server";
import CreateError from "./Error";
import { config } from "./config";
import data from "./data";
import { getCookie } from "./utils";

export const getUser = async () => {
  const token = await getCookie();

  try {
    const response = await fetch(`${config.server}/api/users/userData`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `userToken=${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
};

export const getGames = async () => {
  return data;
};

export const getGameById = async (gameId: string) => {
  try {
    const game = data.find((item) => item.gameName === gameId);
    if (!game || game === undefined) {
      throw new CreateError(204, "No Game Found");
    }
    return { game: game, status: 200 };
  } catch (error) {
    return {
      game: null,
      status: 500,
    };
  }
};
