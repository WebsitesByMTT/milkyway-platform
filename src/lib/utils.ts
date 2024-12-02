import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function convertToSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove all non-word characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with a hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}
