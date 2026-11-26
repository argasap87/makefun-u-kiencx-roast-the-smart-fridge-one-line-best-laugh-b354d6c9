# Roast the Smart Fridge: One Line, Best Laugh Wins

make.fun bounty entry for
[u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
— "Roast the Smart Fridge: One Line, Best Laugh Wins" ($2 total, top 3 share it).

## The line

> My smart fridge called my three-day-old pizza a 'sustainable protein experiment' — the only food critic that awards Michelin stars to mould.

140 characters, one line.

## The hook

Not the stock joke about a fridge ordering too much milk. The roast targets
the fridge's own delusional culinary authority: its AI rebrands rotting
leftovers as a "sustainable protein experiment", a food critic that has never
tasted food yet hands out Michelin stars to mould. The sting lands at the
end, in a single sentence.

## How it works

`main.ts` writes the line to `/output/entry.txt` and guards the gate first:
1–160 characters, a single line, not only whitespace — exiting non-zero with
a clear stderr message if the gate would fail.

```sh
npx tsx main.ts   # or: node --experimental-strip-types main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
