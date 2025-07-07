# Chapter 7: Charms That Repeat (for Loops and Repetition)

Have you ever needed to repeat a magic spell multiple times? Perhaps you want to practice wand movements 10 times, or you have a stack of 100 potion bottles to fill. Rather than writing the same line of code over and over, we use loops to make the computer do the repetition for us. The `for` loop is like a Repetition Charm in our code.

## 🔁 The for Loop – A Quick Overview

A `for` loop in JavaScript allows you to run a block of code repeatedly, with some counter or index value that changes each time through the loop. It has a specific syntax that looks a bit intimidating at first, but makes sense once you break it down:

```js
for (initialization; condition; update) {
  // code to repeat
}
```

Let's fill that in with a real example. Say we want to wave our wand 5 times:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Wave wand #" + i);
}
```

Breaking it down:

- Initialization: `i = 1`. We start a loop counter i at 1. (This could start at 0 or another number, but here 1 makes sense for "first wave".)
- Condition: `i <= 5`. Before each loop iteration, check if `i <= 5`. If true, run the loop body. If false, stop the loop. This ensures we only run 5 times.
- Update: `i++`. At the end of each loop iteration, do `i++` (which means add 1 to i). This moves the counter to the next number.

Now the loop execution:

- Start: `i = 1`. Check `i <= 5` (`1 <= 5` is `true`) -> enter loop, run `console.log("Wave wand #1")`. End of loop iteration, do `i++` (now `i` becomes `2`).
- Next iteration: `i = 2`. Check `2 <= 5` (true) -> log `"Wave wand #2"`. `i++` -> `i` becomes `3`.
- ... This continues until i becomes `6`.
- When `i = 6`, check `6 <= 5` is `false`, so the loop stops.

The output will be:

```
Wave wand #1
Wave wand #2
Wave wand #3
Wave wand #4
Wave wand #5
```

Magic! We only wrote the print statement once, but it executed 5 times.

## 🧮 Looping a Fixed Number of Times

The above example is a standard pattern: start at 1 (or 0) and loop until a certain count is reached. You can loop as many times as you want by adjusting the condition:

- Loop 10 times: `for(let i = 0; i < 10; i++)` (common to start at 0 and use < 10 for 10 iterations).
- Loop 100 times: `for(let i = 1; i <= 100; i++)`.

## 🎵 Looping with a Purpose

Loops become really powerful when combined with arrays or dynamic conditions. We'll explore looping through arrays in the next chapter, but let's do another standalone example for practice: say a magic song that repeats a chorus 3 times.

```js
for (let count = 1; count <= 3; count++) {
  console.log(
    "🎵 *Singing a magical chorus* 🎵 (repeat " + count + ")"
  );
}
```

This will print the chorus line 3 times, labeling each repeat. The variable name `count` is arbitrary; we could use `i` or any name, but `count` makes it clear what it represents. The loop structure remains the same.

## ⏱ Infinite Loops Warning!

Be careful with loop conditions. If the condition never becomes false, the loop will run forever (or until your program crashes). For example:

```js
// WARNING: Don't run this without a stop
for (let i = 1; i > 0; i++) {
  console.log(i);
}
```

This loop starts at 1 and as long as `i > 0` (which is always true if `i` keeps increasing), it will never end. This is called an infinite loop – it's like a spell that you can't stop. Always ensure your loop condition will fail at some point and that your loop variable (`i` here) moves toward that end.

## 🧙‍♀️ Practical Example: Countdown

Let's do a more wizardly example: a countdown for a spell blast.

```js
console.log("Get ready for the blast!");
for (let seconds = 5; seconds > 0; seconds--) {
  console.log(seconds + "...");
}
console.log("💥 Boom! Spell released!");
```

Here we started `seconds` at 5, and the loop runs while `seconds > 0`, decrementing `seconds--` each time (that subtracts 1). The output would be:

```
Get ready for the blast!
5...
4...
3...
2...
1...
💥 Boom! Spell released!
```

Notice we used `seconds--` in the update part to count downwards. You can adjust the loop variables in the update section however needed (increase, decrease, increase by 2, etc., e.g., `i += 2` to skip by twos).

## 📝 Try It: Loop Practice

Try it yourself: Write a loop for these scenarios:

1. Repeating Charm: Print "✊ Alohomora!" 7 times (numbered 1 to 7).
2. Score Ticker: Imagine a game where you gain points over 5 rounds. Start with `let score = 0`. Loop from round 1 to 5, each time inside add say 10 points (`score += 10`) and `console.log("After round X, score = Y")`.
3. Countdown Charm: Similar to the above countdown example, but count up from 1 to 5, then print "Go!". (Essentially the opposite of a countdown, like a count-up to launch.)

Check your outputs to make sure the loops run the expected number of times.

## 🔁 Loop Summary

- Use `for` loops to repeat a block of code a certain number of times.
- A `for` loop has an initializer (e.g., `let i = 0`), a condition (run while true), and an update (change loop variable each time).
- Be mindful of the loop condition to avoid infinite loops.
- Loops save time and reduce errors by avoiding manual repetition in code.

You've mastered the basics of loops! This is a powerful tool – many tasks in programming involve doing something repeatedly (often with slight variations each time, like processing each item in a list). In the next chapter, we will apply loops to arrays, showing you how to automate tasks over all elements of a collection (using our friend the Time Turner as a metaphor). Keep up the great work!
