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

export const getGames = async () => {
  const res = await fetch("http://localhost:3000/api/games");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
