// Per Word Capitalisation given an input string.

export const capitalise = (s: string): string =>
  s
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
