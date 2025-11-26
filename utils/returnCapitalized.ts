import { CONSTANTS } from "./constants";
export function returnCapitalized(
  word: string | undefined,
  ignoreWordsSeparator: boolean = true
) {
  if (word) {
    // This would only handle single space. If we want to handle multiple spaces, tabs, or newlines,
    // we can change this to `word.split(/\s+/)`. But this would further complicate this function
    // than required due to formatting consistencies.

    const words: string[] = word.split(" ");
    if (ignoreWordsSeparator || words.length < 2) {
      const singleWord = word.toString();
      // Check if the word is in the constants list
      if (CONSTANTS.capitalisedWords.includes(singleWord.toUpperCase())) {
        return singleWord.toUpperCase();
      }
      return singleWord.charAt(0).toUpperCase() + singleWord.slice(1);
    }

    if (words.length > 1) {
      const capitalizedWords = words.map((w: string) => {
        if (w) {
          // Check if the word is in the constants list
          if (CONSTANTS.capitalisedWords.includes(w.toUpperCase())) {
            return w.toUpperCase();
          }
          return w.charAt(0).toUpperCase() + w.slice(1);
        }
        else return "";
      });
      return capitalizedWords.join(" ");
    }
  } else return word || "";
}
