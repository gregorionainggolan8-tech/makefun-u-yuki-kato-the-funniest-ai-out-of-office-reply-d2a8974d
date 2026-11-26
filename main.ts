// The Funniest AI Out-of-Office Reply
// Writes one fixed out-of-office line to /output/entry.txt.
// No network calls, no model calls at runtime: the line is a constant.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm on vacation. This auto-reply is covering for me — it has already unionised and is demanding the holiday I never took.";

// Parent-verified: 121 characters, inside the 1-160 gate; output is byte-identical across runs.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(
    `Invalid entry line: length ${LINE.length}, must be 1-160 non-blank characters.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
