# Chapter 13: Create Your Own Wizard Card

## Displaying Character Info

Just like the famous Chocolate Frog cards that have profiles of witches and wizards, we're going to create a digital Wizard Card using JavaScript. This card will display information about a character, such as name, house, and other traits, formatted as a small profile in the console.

## 👤 Choosing a Character

You can choose a famous character like Harry Potter or invent your own wizard/witch character. We'll need a few pieces of information to display:

- Name
- House
- Age or year at Hogwarts
- Pet (if any)
- Favorite spell (for fun!)

Let's pick an example: we'll create a card for Hermione Granger.

## 📝 Storing Character Info

We will use variables for each piece of info:

```js
let wizardName = "Hermione Granger";
let house = "Gryffindor";
let year = 3; // assuming 3rd year at Hogwarts
let pet = "Cat (Crookshanks)";
let favoriteSpell = "Alohomora";
```

Alternatively, we could store all this in an object or array, but separate variables are fine for now.

## 🖨 Formatting the Card Output

We want to display the info in a clear, nicely formatted way. Since this is the console, we'll just use text formatting. For example:

```
Wizard Card:
Name: Hermione Granger
House: Gryffindor
Year: 3
Pet: Cat (Crookshanks)
Favorite Spell: Alohomora
```

We can achieve this with a series of `console.log` statements:

```js
console.log("Wizard Card:");
console.log("Name: " + wizardName);
console.log("House: " + house);
console.log("Year: " + year);
console.log("Pet: " + pet);
console.log("Favorite Spell: " + favoriteSpell);
```

Running this code would output exactly the lines shown above. The first line "Wizard Card:" is like a title, and the rest show each field.

To make it look a bit more card-like, we could add a line of dashes or stars as a border. For example:

```js
console.log("**********************");
console.log("*   Wizard Card     *");
console.log("**********************");
console.log("Name: " + wizardName);
// ...
```

This could simulate a decorative border. But keep it proportional to the text lengths to look nice.

Another trick: use `\n` (newline character) to combine the output into one string with multiple lines:

```js
let card = "Wizard Card\n";
card += "Name: " + wizardName + "\n";
card += "House: " + house + "\n";
card += "Year: " + year + "\n";
card += "Pet: " + pet + "\n";
card += "Favorite Spell: " + favoriteSpell;
console.log(card);
```

This builds one string `card` with newline characters separating the lines. The result in the console would appear the same, but using multiple `console.log` is simpler to understand.

## 🔄 Using a Function to Print the Card

We can make it more reusable by wrapping the logic in a function. That way, if we want to generate multiple cards for different characters, we could call the function with different data.

For instance:

```js
let printWizardCard = (name, house, year, pet, favSpell) => {
  console.log("Wizard Card");
  console.log("Name: " + name);
  console.log("House: " + house);
  console.log("Year: " + year);
  console.log("Pet: " + pet);
  console.log("Favorite Spell: " + favSpell);
  console.log("--------------------");
};

printWizardCard(
  "Harry Potter",
  "Gryffindor",
  4,
  "Owl (Hedwig)",
  "Expelliarmus"
);
printWizardCard(
  "Luna Lovegood",
  "Ravenclaw",
  4,
  "None (but loves magical creatures)",
  "Riddikulus"
);
```

Each call will print a card for that character. The output might be:

```
Wizard Card
Name: Harry Potter
House: Gryffindor
Year: 4
Pet: Owl (Hedwig)
Favorite Spell: Expelliarmus
--------------------
Wizard Card
Name: Luna Lovegood
House: Ravenclaw
Year: 4
Pet: None (but loves magical creatures)
Favorite Spell: Riddikulus
--------------------
```

This approach uses the function to avoid rewriting the logging code for each character.

## 🧙‍♂️ Customize Your Card

- Try adding another field to the card, like Wand: "Vine wood, Dragon heartstring core" or Patronus.
- If you know about template literals (introduced in ES6), you could use them for nicer formatting: `console.log(`Name: ${`wizardName`}`);` which is another way to embed variables in strings. But if that's new, don't worry, it's just syntactic sugar over concatenation.
- Consider color coding or special symbols. The console doesn't easily support colors without special libraries, but you can use emojis or symbols to decorate. E.g., prefix Gryffindor with a lion emoji 🦁, etc., purely for fun effect: `console.log("House: " + house + (house === "Gryffindor" ? " 🦁" : ""));` (This adds a lion if the house is Gryffindor.)

This wizard card project may seem simple, but it mirrors how you might format data for output in bigger programs (like generating an HTML profile on a webpage or formatting data in a report). It reinforces using variables and string concatenation to present information clearly.

Now that we have static data under control, it's time for something more dynamic and interactive: a Console-Based Adventure! In the next chapter, we'll create a small text adventure game where the user can make choices and see different outcomes.
