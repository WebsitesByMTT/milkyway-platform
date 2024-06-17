"use server";
import { config } from "./config";
import { getCookie } from "./utils";

interface ApiResponse {
  message: string;
}

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

    console.log(data);

    if (!response.ok) {
      return data; // Return the response data even if the response is not OK
    }
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
