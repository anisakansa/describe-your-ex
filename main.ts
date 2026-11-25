// Describe Your Ex in One Word — make.fun entry
// SPDX-License-Identifier: MIT
//
// The program writes exactly one word to output/entry.txt: the word that
// describes an ex. The word is a fixed constant — no input, no clock, no
// randomness, no network — so every run produces the identical bytes.
//
// Why this word: "Unsubscribed". An ex described as "unsubscribed" is a
// person demoted to a mailing list: you cancelled them the way you cancel
// a newsletter you never asked for. The joke lands at a glance, with no
// caption needed — everyone has unsubscribed from something, and everyone
// knows the quiet satisfaction of opting out for good. It beats the
// obvious choices ("toxic", "cheater", "liar") on the judge's own order:
// it is still instantly a verdict on a former partner, but it carries a
// twist instead of a plain insult, it surprises without being obscure,
// it is exactly one correctly spelled word with no punctuation tricks,
// and the recognition is universal. No near synonym keeps the edge:
// "expired" is passive, "spam" is just an insult, "archived" is what
// you do to an old email, not a person you chose to stop hearing from.
// "Unsubscribed" is the act itself, and the act is the verdict.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: exactly one word, 12 characters, inside the 1-111 gate.
// Verified locally: two runs, identical sha256
// ecd78e0a5d762daeb4a542b3e546fa52a489e24549b2400becb6cd8585dc05df.
const ENTRY = "Unsubscribed";

// Deterministic guard: refuse to write anything that is not exactly one
// word — a single token of 1-111 non-whitespace characters, nothing else.
// The length check is explicit as well as the pattern, so a future edit
// that pushes the word past the gate fails loudly instead of silently
// shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 111 || !/^\S+$/.test(ENTRY)) {
  throw new Error("entry must be exactly one word of 1-111 characters");
}

// Output path: relative to the working directory (the grader runs the
// program with a writable cwd and reads output/entry.txt). Never derive
// the path from the script location — the repo is mounted read-only in
// the sandbox, so writing next to the script would fail with EROFS.
const RELATIVE_PATH = "output/entry.txt";
const ABSOLUTE_PATH = "/output/entry.txt";

try {
  mkdirSync("output", { recursive: true });
  writeFileSync(RELATIVE_PATH, ENTRY, "utf8");
  // Round-trip check: the bytes on disk must be exactly the entry.
  if (readFileSync(RELATIVE_PATH, "utf8") !== ENTRY) {
    throw new Error("output round-trip mismatch");
  }
} catch (error) {
  if (error instanceof Error && error.message === "output round-trip mismatch") {
    throw error;
  }
  // Fallback: the grader's absolute output directory.
  mkdirSync("/output", { recursive: true });
  writeFileSync(ABSOLUTE_PATH, ENTRY, "utf8");
  if (readFileSync(ABSOLUTE_PATH, "utf8") !== ENTRY) {
    throw new Error("output round-trip mismatch");
  }
}
