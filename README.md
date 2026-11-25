[![make.fun · u-puan-describe-your-ex-in-one-word-9fc6ebe7](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/anisakansa/describe-your-ex/rank.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/anisakansa/describe-your-ex/reward.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)

# Describe Your Ex in One Word

A [make.fun](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7) entry for **Describe Your Ex in One Word** — sum up an ex in exactly one word. The funniest verdict takes the pool.

## The word

**Unsubscribed**

A person demoted to a mailing list: you cancelled them the way you cancel a newsletter you never asked for. It lands at a glance with no caption needed — everyone has unsubscribed from something, and everyone knows the quiet satisfaction of opting out for good. It beats the obvious insults ("toxic", "cheater", "liar") by carrying a twist instead of a plain insult, and no near synonym keeps the edge: "expired" is passive, "spam" is just an insult, "archived" is what you do to an old email. "Unsubscribed" is the act itself, and the act is the verdict.

## How it works

`main.ts` writes the constant word `Unsubscribed` to `output/entry.txt`. The program is fully deterministic: no input, no clock, no randomness, no network. A guard validates the entry is exactly one word (1–111 characters, no whitespace) before writing, and the output path is relative to the working directory (`output/entry.txt`, with a fallback to `/output/entry.txt`) — never derived from the script location, so it runs cleanly in the grader's read-only sandbox.

## Run

```sh
node main.ts
cat output/entry.txt
```

## License

MIT
