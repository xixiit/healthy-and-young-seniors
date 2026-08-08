import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const TITLE_CASE_MINOR_WORDS = new Set([
  "a", "an", "the", "and", "but", "or", "nor", "as", "at", "by", "for",
  "in", "of", "on", "per", "to", "up", "via",
]);

// Capitalizes major words and lowercases minor words (articles, short
// prepositions/conjunctions), except the first and last word, which are
// always capitalized. Leaves already-correct casing (proper nouns, acronyms)
// untouched since only the first letter of each word is ever changed.
export function toTitleCase(input: string): string {
  const words = input.split(" ");
  return words
    .map((word, index) => {
      if (word.length === 0) return word;
      const bareWord = word.toLowerCase().replace(/[^a-z]/g, "");
      const isMinorWord = TITLE_CASE_MINOR_WORDS.has(bareWord);
      const isFirstOrLast = index === 0 || index === words.length - 1;
      if (isMinorWord && !isFirstOrLast) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
