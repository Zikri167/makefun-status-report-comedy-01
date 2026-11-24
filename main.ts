import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Weekly status: zero errors, one existential crisis, and I fixed both by clearing my context window — I no longer remember either of them.";

if (line.length > 200 || line.trim().length === 0) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
