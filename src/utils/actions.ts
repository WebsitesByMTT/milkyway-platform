"use server";
import { redirect } from "next/navigation";
import { config } from "./config";
import { getCookie } from "./utils";

interface ApiResponse {
  message: string;
}

export async function fetchGames(category: string = "all") {
  const token = await getCookie();

  try {
    const res = await fetch(
      `${config.server}/api/games/getGames?category=${category}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `userToken=${token}`,
        },
        next: { revalidate: 60 }, // Cache the response for 60 seconds
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(`Failed to fetch games: ${error.message}`);
    }

    return res.json();
  } catch (error) {
    console.log(error);
    redirect("/logout");
  }
}

export const getGameById = async (id: string) => {
  const token = await getCookie();
  console.log("Get Game By ID: ", id);

  try {
    const response = await fetch(`${config.server}/api/games/getGames/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `userToken=${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching game: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("GAme by id : ", data);

    return data;
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return { message: error.message || "Failed to fetch game data" };
    } else {
      return { message: "An unknown error occurred" };
    }
  }
};

export const addFavGame = async (
  id: string,
  type: string
): Promise<ApiResponse> => {
  const token = await getCookie();
  console.log("Add Fav  : ", id, type);

  try {
    const response = await fetch(`${config.server}/api/games/favourite`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `userToken=${token}`,
      },
      body: JSON.stringify({ gameId: id, type: type }),
    });

    const data: ApiResponse = await response.json();

    return data;
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      return { message: error.message || "Failed to add favorite game" };
    } else {
      return { message: "An unknown error occurred" };
    }
  }
};
