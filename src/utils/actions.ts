"use server";
import { config } from "./config";
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

export const getGames = async (category: string) => {
  const token = await getCookie();
  console.log("Searched Category : ", category);

  try {
    const response = await fetch(
      `${config.server}/api/games/getGames?category=${category}`,
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
  } catch (error) {
    console.log(error);
  }
};

export const addFavGame = async () => {};
