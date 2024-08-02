"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { fetchGames } from "./actions";

export const getCookie = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return token;
};

export const deleteCookie = async () => {
  cookies().delete("token");
};

export const getCurrentUser = async () => {
  const token = await getCookie();
  const user = jwt.decode(token as string);
  return user;
};

export const getCategory = async () => {
  const cookieStore = cookies();
  const savedCategory = cookieStore.get("selected")?.value;
  return savedCategory;
};

