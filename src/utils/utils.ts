"use server";

import { cookies } from "next/headers";
import { config } from "./config";

async function getCookieData() {
  const cookieData = cookies().get("token")?.value as string;
  return cookieData;
}

export async function getUser() {
  try {
    const token = await getCookieData();

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
}

export async function getGames() {
  const res = await fetch("http://localhost:3000/api/games");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}
