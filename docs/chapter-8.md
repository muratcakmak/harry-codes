# Chapter 8: Time Turners (Looping Through Arrays)

In the wizarding world, a Time Turner lets Hermione revisit hours in the day to attend multiple classes. In programming, loops can let us revisit each element in an array as if we had a time turner to iterate through all items one by one. This chapter will show how to combine loops with arrays to perform operations on each element easily.

## 📜 Looping Over an Array with Indexes

The most common pattern to iterate (loop) through an array is to use a `for` loop that goes from index 0 up to the last index (`array.length - 1`). For example, given an array of spells:

```js
let spells = ["Accio", "Expecto Patronum", "Expelliarmus", "Lumos"];
for (let i = 0; i < spells.length; i++) {
  console.log("Spell " + i + ": " + spells[i]);
}
```

Explanation:

- We start `i` at 0 (the first index).
- Run the loop while `i < spells.length`. If `spells.length` is 4, the last index is 3, so `i < 4` means `i` will go 0,1,2,3 and stop when it reaches 4.
- In each loop iteration, `spells[i]` gives the spell at the current index.
- This loop will print each spell with its index number.

This technique of using `i` from 0 to length-1 is very common. It works for any array, regardless of length, because we use the array's own `length` property.

## 🚀 Looping with for...of (A Simpler Way)

JavaScript has a convenient loop specifically for iterating over arrays (and other collections) called `for...of`. It avoids the need for an index variable and lets you work directly with each item:

```js
for (let spell of spells) {
  console.log("Spell: " + spell);
}
```

This loop will directly give you each spell from the `spells` array one by one. It's like saying "for each spell in spells, do the following". The output:

```
Spell: Accio
Spell: Expecto Patronum
Spell: Expelliarmus
Spell: Lumos
```

Both `for (let i=0; i<...; i++)` and `for (let spell of spells)` achieve the same result here. The `for...of` is a bit more readable for this purpose, but it's good to understand both. You might primarily use the index style when you need the index number for something (like numbering or accessing a parallel array by index).

## 🌟 Example: List All Students

Let's say we have an array of student names and we want to greet each one:

```js
let students = ["Harry", "Ron", "Hermione", "Neville"];
for (let name of students) {
  console.log("Hello, " + name + "!");
}
```

This will output:

```
Hello, Harry!
Hello, Ron!
Hello, Hermione!
Hello, Neville!
```

If we did it with a classic for loop:

```js
for (let j = 0; j < students.length; j++) {
  console.log("Hello, " + students[j] + "!");
}
```

It would produce the same result.

## 🎒 Example: Calculating a Total

Imagine an array of points earned in a series of challenges:

```js
let challengePoints = [5, 10, 3, 8, 2];
let total = 0;
for (let points of challengePoints) {
  total = total + points;
}
console.log("Total points: " + total);
```

This loop goes through each number in `challengePoints` and accumulates it into the `total`. (We could also use `total += points;` as a shorthand for `total = total + points;`.)

After the loop, `total` will be 5+10+3+8+2 = 28, so it would print "Total points: 28".

## 🔄 Modifying Items in an Array

You can also loop through an array and change elements. For example, if we have an array of spells and we want to add "!" to each one (to indicate they're spoken excitedly):

```js
for (let k = 0; k < spells.length; k++) {
  spells[k] = spells[k] + "!";
}
console.log(spells);
// Output: ["Accio!", "Expecto Patronum!", "Expelliarmus!", "Lumos!"]
```

We used a regular index loop here because we needed to assign back to `spells[k]`. (Using `for...of` gives you a copy of each element in spell, so modifying that wouldn't change the original array by itself. There are ways to modify with `for...of` too, but index is straightforward.)

## 📝 Try It: Looping Through Your Own Array

Try it yourself: Take the `myFavorites` array you made in the previous chapter (or make a new array of 5 items you like).

- Write a loop to print each item with a message, e.g., "I like \_\_\_\_".
- Create an array of numbers (maybe 1 through 5 for simplicity). Use a loop to calculate the factorial of the highest number. (Factorial of 5 is 5*4*3*2*1 = 120. You can do this by starting with a `result = 1`, and in each loop, multiply `result` by the current number.)
- Make an array of a few sentences (strings). Then use a loop to count the total number of characters across all sentences. (Hint: use the `.length` property of each string to get its length, and sum them up.)

By practicing these, you get comfortable with how loops handle each element systematically.

## ⏮ Looping Recap

- Loops and arrays together let you process collections of data efficiently.
- Use `for (let item of array)` for a clean way to get each element.
- Use a classic indexed `for` loop when you need to know the index or modify the array.
- Loops can accumulate results (sums, products, concatenated strings), search for a value, or transform each element.

Congratulations, you can now harness the power of repetition and handle lists of data gracefully. Our next chapter will discuss a caution: sometimes using too many nested if statements can lead you into the "Forbidden If" forest. We'll learn how to avoid overly complicated conditional structures by using some logical strategies.
