import { returnCapitalized } from "./returnCapitalized";

export function returnPluralized(text: string, count: number, capitalized = false) {
  if ((text || "").trim().length === 0) return "";
  const specialWords = { i: "we", I: "we", my: "our", me: "us" };
  const word =
    (count || 0) === 1
      ? text
      : specialWords[text as keyof typeof specialWords] || `${text}s`;
  return capitalized ? returnCapitalized(word) : word;
}