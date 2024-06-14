"use server";
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

// export const getGames = async (category: string) => {
//   if (category === "all") {
//     return data;
//   }
//   console.log("Categor : ", category);
//   const filteredData = data.filter((game) => game.category === category);
//   return filteredData;
// };

export const getGames = async (category: string) => {
  const token = await getCookie();

  try {
    const response = await fetch(
      `${config.server}/api/games/getGames?category=all`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `userToken=${token}`,
        },
      }
    );

    const data = await response.json();
    console.log("Games : ", data);

    return data;
  } catch (error) {}
};

export const getGameById = async (gameId: string) => {
  console.log("Searching for  : ", gameId);

  try {
    const game = data.find(
      (item) => item.gameName.toLowerCase() === gameId.toLowerCase()
    );
    console.log("Found : ", game);

    if (!game || game === undefined) {
      throw new Error("No Game Found");
    }
    return { game: game, status: 200 };
  } catch (error) {
    return {
      game: null,
      status: 500,
    };
  }
};
