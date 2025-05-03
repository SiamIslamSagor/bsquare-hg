import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/&/g, "-and-") // Replace & with "and"
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars (except hyphens)
    .replace(/\//g, "-") // Replace slashes with hyphens
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .trim(); // Trim leading/trailing hyphens
}
