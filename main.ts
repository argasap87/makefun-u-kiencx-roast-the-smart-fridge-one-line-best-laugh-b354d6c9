// make.fun entry: Roast the Smart Fridge — One Line, Best Laugh Wins
// Competition: u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// Writes a single roast line (1-160 chars, one line) to /output/entry.txt.
//
// The line: the smart fridge as a pretentious food critic — its AI rebrands
// three-day-old pizza as a "sustainable protein experiment", a critic that
// hands out Michelin stars to mould. Fresh angle: not the stock
// milk-ordering joke, but the fridge's own delusional culinary authority.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge called my three-day-old pizza a 'sustainable protein experiment' — the only food critic that awards Michelin stars to mould.";

const MAX_CHARS = 160;

// Gate guard: the sealed scorer requires /output/entry.txt to be UTF-8 text
// of 1-160 characters, not only whitespace, on a single line.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > MAX_CHARS) {
  console.error(
    `gate failed: entry is ${charCount} characters, must be 1-${MAX_CHARS}`,
  );
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("gate failed: entry is only whitespace");
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("gate failed: entry must be a single line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote /output/entry.txt (${charCount} chars)`);
