# Chapter 3: Spells with Ingredients

## Functions with Parameters and Return Values

Now that you can cast basic spells (functions), it's time to make them more powerful by adding ingredients. In coding terms, these ingredients are called parameters. They allow you to pass information into your functions so the spell can do something with that info. We'll also learn about returning values, which is like a spell handing you back a result after it runs.

## 🥣 Adding Parameters (Function Inputs)

A spell isn't very useful if it's always the same. Imagine a Levitation spell that can only lift a feather. What if you want to lift a book or a chair? We need to give our spell a target. Similarly, functions can take inputs (parameters) to work on different data each time.

Let's modify our lumos spell to announce a custom brightness level:

```js
let lumos = (intensity) => {
  console.log("Lumos at intensity level " + intensity + "!");
};
```

Here, `intensity` is a parameter. It's a placeholder for a value that we'll provide when we cast the spell. The function uses this parameter inside by printing it.

Now, when we call `lumos()`, we must give it a value for intensity:

```js
lumos(1);
// Output: Lumos at intensity level 1!

lumos(5);
// Output: Lumos at intensity level 5!
```

Depending on the number we pass in, the message changes. We can use any number as the intensity. The parameter `intensity` behaves like a variable inside the function, holding whatever value you passed.

You can have multiple parameters too. Let's create a spell that combines ingredients to brew a potion:

```js
let brewPotion = (ingredient1, ingredient2) => {
  console.log(
    "Brewing a potion with " +
      ingredient1 +
      " and " +
      ingredient2 +
      "..."
  );
};

brewPotion("unicorn hair", "phoenix feather");
// Output: Brewing a potion with unicorn hair and phoenix feather...

brewPotion("toad slime", "nightshade");
// Output: Brewing a potion with toad slime and nightshade...
```

Each time, the function takes two parameters and uses them in the message. By changing what we pass in, we get a different output, all using the same function spell.

## 🎁 Return Values – When Spells Give Back

So far, our functions have been performing actions (printing to console) but not producing new values for us to use elsewhere. In coding, functions can also return a value. Returning is like a spell creating something and handing it to you.

For example, let's make a simple function that computes something and returns the result instead of printing it directly:

```js
let add = (a, b) => {
  return a + b;
};

let result = add(2, 3);
console.log(result);
// Output: 5
```

Here's what happened:

- We called `add(2, 3)`. Inside the function, `a` becomes 2 and `b` becomes 3. It calculates 2 + 3 and returns 5.
- We captured that returned 5 in a variable named `result`.
- Then we `console.log(result)` which displays 5.

We could even skip the middle step and do:

```js
console.log(add(10, 4));
// This will output 14 directly.
```

The value 14 from `add(10,4)` goes straight into `console.log`.

Returning is useful when you need to get a result out of a function to use later in your program. It's like asking a question spell and getting an answer.

> Important: Once a function hits a `return` statement, it immediately stops and gives back the value. Any code after `return` inside the function won't run.

## 🧮 Magic Math and Text with Returns

Let's try a couple more return examples, one with numbers and one with strings:

1. Multiplication spell: a function to multiply two numbers.

```js
let multiply = (x, y) => {
  return x * y;
};

console.log(multiply(6, 7));
// Output: 42 (a magically significant number!)
```

2. Incantation combiner: a function to join two words into a magical-sounding phrase.

```js
let combineWords = (word1, word2) => {
  return word1 + " " + word2;
};

let spellName = combineWords("Wingardium", "Leviosa");
console.log(spellName);
// Output: Wingardium Leviosa
```

Here, `combineWords` takes two strings and returns them concatenated with a space in between. We stored the result in `spellName` and then printed it.

## 📝 When to return and when to console.log?

- Use `console.log` inside a function when you want the function to directly do something visible (like output a message) as its effect.
- Use `return` when the function's purpose is to calculate a value or result that the rest of your code will use. The function itself won't print anything; it just hands off the result.

You can even do both: compute something and log it, but often that's not needed. A clean approach is to have functions return values, and then you decide outside the function if you want to log them or use them in another computation.

## 💡 Try It: Personalized Greetings

Try it yourself: Create a function that returns a personalized greeting. For example:

```js
let greet = (name) => {
  return "Welcome to Hogwarts, " + name + "!";
};
```

- Call `greet("Harry")` and maybe store it in a variable or directly `console.log` it to see the message.
- Try calling it with different names (your name, friends' names, or even funny nicknames like "Dragon Tamer").

Also, try writing a function `subtract(x, y)` that returns the difference (`x - y`). Test it with a few numbers and print the results.

By now, you've learned how to give your spells inputs (parameters) and how to have them hand back results (return values). This makes functions incredibly powerful – they can perform calculations or generate messages based on what you tell them.

In the next chapter, we will learn about arrays, which are like magical collections (spellbooks full of spells or pockets full of artifacts) where you can store multiple items under one variable. Get ready to expand your storage abilities!
