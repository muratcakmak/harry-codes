# Chapter 10: Mini Project – Dueling Club Tracker

## Dueling Club Tracker

It's time to put together the skills from Part 2 (and Part 1) in a fun mini project! In this project, we'll create a simple Dueling Club Tracker. The idea is to track the outcomes of multiple magical duels and tally the wins for each participant. This will involve arrays (to store duel results), loops (to iterate through those results), and conditionals (to count wins per person).

## 🏆 Project Overview

Imagine a Dueling Club at Hogwarts where students face off in friendly wizard duels. Let's say we have three duelists: Harry, Hermione, and Draco. They duel multiple times and we record the winner of each duel in an array. Our goal is to count how many duels each student won.

### Steps Outline:

1. Create an array listing the winner of each duel in order.
2. Set up counters for each duelist's wins (start all at 0).
3. Loop through the array of duel winners:
   - For each winner name in the list, add a point to that person's counter.
4. After the loop, compare the win counts and display the results (who won how many duels, and who is the overall champion).

## 📊 Setting Up the Data

First, let's represent the outcomes of, say, 10 duels in an array:

```js
let duelWinners = [
  "Harry",
  "Draco",
  "Hermione",
  "Harry",
  "Harry",
  "Draco",
  "Hermione",
  "Harry",
  "Draco",
  "Harry",
];
```

Each element is the name of the winner of that round. For example, duel 1 was won by Harry, duel 2 by Draco, duel 3 by Hermione, etc.

Next, we need variables to count wins:

```js
let harryWins = 0;
let hermioneWins = 0;
let dracoWins = 0;
```

## 🔄 Looping Through Duel Results

Now we traverse the duelWinners array and update the counts:

```js
for (let winner of duelWinners) {
  if (winner === "Harry") {
    harryWins++;
  } else if (winner === "Hermione") {
    hermioneWins++;
  } else if (winner === "Draco") {
    dracoWins++;
  }
}
```

This loop goes through each name in the list:

- If the name is "Harry", increment harryWins.
- If "Hermione", increment her counter.
- If "Draco", increment his counter.

After this loop, the counters will reflect the total wins from the array data.

## 📣 Displaying the Results

Now we can output the tallies and perhaps determine who did the best:

```js
console.log("Dueling Club Results:");
console.log("Harry won " + harryWins + " duels.");
console.log("Hermione won " + hermioneWins + " duels.");
console.log("Draco won " + dracoWins + " duels.");
```

For our data, let's quickly figure out the totals:

- Harry appears in the array at positions 0, 3, 4, 7, 9 -> that's 5 wins.
- Hermione appears at positions 2, 6 -> 2 wins.
- Draco appears at positions 1, 5, 8 -> 3 wins.

So we'd expect:

```
Harry won 5 duels.
Hermione won 2 duels.
Draco won 3 duels.
```

We can add a bit of extra logic to announce the champion:

```js
let champion = "";
let maxWins = 0;

if (harryWins > maxWins) {
  champion = "Harry";
  maxWins = harryWins;
}
if (hermioneWins > maxWins) {
  champion = "Hermione";
  maxWins = hermioneWins;
}
if (dracoWins > maxWins) {
  champion = "Draco";
  maxWins = dracoWins;
}

console.log(
  "🏅 The Dueling Champion is: " +
    champion +
    " with " +
    maxWins +
    " wins!"
);
```

This snippet goes through each player's wins and keeps track of the largest number, updating the champion name accordingly. By the end, `champion` will have the name of the duelist with the most wins, and `maxWins` will have their win count.

With our example numbers, it should announce Harry as the champion with 5 wins.

> There is a tiny caveat: if there's a tie for max wins, this approach would end up with the last checked tied name as champion. For instance, if Harry and Draco both had 5, champion would end up "Draco" because it was checked last. Handling ties could involve extra logic (like declaring a tie), but we'll keep it simple here.

## 🔧 Putting it Together – Full Code

Here's the full mini program assembled:

```js
let duelWinners = [
  "Harry",
  "Draco",
  "Hermione",
  "Harry",
  "Harry",
  "Draco",
  "Hermione",
  "Harry",
  "Draco",
  "Harry",
];

let harryWins = 0;
let hermioneWins = 0;
let dracoWins = 0;

// Tally the wins
for (let winner of duelWinners) {
  if (winner === "Harry") {
    harryWins++;
  } else if (winner === "Hermione") {
    hermioneWins++;
  } else if (winner === "Draco") {
    dracoWins++;
  }
}

// Display individual totals
console.log("Dueling Club Results:");
console.log("Harry won " + harryWins + " duels.");
console.log("Hermione won " + hermioneWins + " duels.");
console.log("Draco won " + dracoWins + " duels.");

// Determine champion
let champion = "";
let maxWins = 0;
if (harryWins > maxWins) {
  champion = "Harry";
  maxWins = harryWins;
}
if (hermioneWins > maxWins) {
  champion = "Hermione";
  maxWins = hermioneWins;
}
if (dracoWins > maxWins) {
  champion = "Draco";
  maxWins = dracoWins;
}

console.log(
  "🏅 The Dueling Champion is: " +
    champion +
    " with " +
    maxWins +
    " wins!"
);
```

Running this should produce:

```
Dueling Club Results:
Harry won 5 duels.
Hermione won 2 duels.
Draco won 3 duels.
🏅 The Dueling Champion is: Harry with 5 wins!
```

## 🎉 Customize and Extend

This mini project can be customized:

- Try changing the `duelWinners` array values to simulate different sequences of outcomes.
- Add another duelist (e.g., "Neville") into the mix. You'd have to add a Neville counter and include him in the if/else logic and champion calculation.
- Instead of a preset array, you could imagine getting input for each duel result from a user (though that requires techniques not yet covered, like prompting input).

What we built here is a form of a tally system, which is very common (counting occurrences of items in a dataset). We specifically applied it to a fun Harry Potter context, but the logic could work for counting votes, tracking inventory usage, etc.

Great work! You've completed Part 2's mini project and reinforced your understanding of loops and conditionals. Now, take a deep breath – you're ready to move into Part 3, where we'll embark on larger projects that create your own little magical world with code. First stop: building a House Points tracker in code, just like at Hogwarts!
