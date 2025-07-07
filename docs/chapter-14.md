# Chapter 14: Console-Based Adventure – Escape from Azkaban

## Escape from Azkaban

Get ready to write your own mini choose-your-own-adventure game! In this project, we'll create a text-based interactive story called "Escape from Azkaban." The player (you) will make choices, and our code will determine what happens next based on those choices. This will heavily use `if/else` logic to branch the story.

## 🎮 Setting the Scene

You (the player) are a prisoner in Azkaban (the infamous wizard prison) and you want to escape. You will be presented with choices at key points, and depending on what you choose, the story will change.

Since this is console-based, we'll use `prompt()` to get input from the user (if you run this in a browser environment). In a static environment (like just reading this as text), you can mentally choose and follow along, but ideally you run the code to actually input choices.

> Note: `prompt()` will open a small dialog in a browser where the user can type an answer. If not running in a browser, we could simulate choices by hardcoding a variable or using a Node.js method, but let's assume a browser for simplicity.

## 📝 Outline of the Adventure Flow

Let's design a simple flow:

1. Start: You find yourself in a cell. You have two possible strategies:
   - Try to pick the lock of your cell.
   - Call the guard over with a fake illness.
2. Choice 1: If you pick the lock (choice "lock"), we go down one path. If you fake illness (choice "illness"), another path.
3. Lock Path:
   - If successful in picking lock, you exit the cell but encounter a Dementor guard outside.
   - You then choose to either fight it with a Patronus or quietly sneak past while it's not looking.
   - Depending on that choice, outcome: maybe success or failure.
4. Illness Path:
   - The guard enters your cell. You can choose to stun him with a quick spell or slip past him.
   - Depending on choice, outcome: maybe you get caught or you proceed.
5. Endings: Could have a successful escape ending or a caught ending (or multiple variations).

We'll keep it fairly short – maybe two layers of choices (so 2 choices leading to 4 possible outcomes total, to keep code manageable).

## ⌨️ Implementing the Choices with prompt and if/else

We'll use `prompt("Your question here")` to get input. It returns the text the user enters (or null if they cancel). We compare that to expected answers.

Let's code it step by step:

### Step 1: Initial Choice

```js
alert(
  "You wake up in a cold, dark cell in Azkaban. You need to escape!"
);
let choice1 = prompt(
  "Do you try to pick the lock or fake an illness to call the guard? (type 'lock' or 'illness')"
);

if (choice1 === "lock") {
  // Path: picking the lock
  alert(
    "Using a wire you found, you start picking the lock... it's tough, but click! The cell door opens."
  );
  let choiceLock = prompt(
    "Outside, a shadowy Dementor floats nearby. Do you cast a Patronus or try to sneak by quietly? (type 'patronus' or 'sneak')"
  );

  if (choiceLock === "patronus") {
    alert(
      "You muster your happiest memory and shout 'Expecto Patronum!' The Dementor is blasted back and you run through the corridors. You've escaped Azkaban! 🎉"
    );
  } else if (choiceLock === "sneak") {
    alert(
      "You attempt to tiptoe past the Dementor... but it senses you! Its cold hand grabs you. Your escape fails. 💀"
    );
  } else {
    alert(
      "Invalid choice. The opportunity passes and you remain stuck."
    );
  }
} else if (choice1 === "illness") {
  // Path: faking illness
  alert(
    "You clutch your stomach and moan. A weary guard comes to check on you."
  );
  let choiceIll = prompt(
    "As the guard enters your cell, do you try to stun him with a spell or slip out the door behind him? (type 'stun' or 'slip')"
  );

  if (choiceIll === "stun") {
    alert(
      "With a quick 'Stupefy!', you knock the guard out cold. You take his keys and find your way out! You've escaped Azkaban! 🎉"
    );
  } else if (choiceIll === "slip") {
    alert(
      "You attempt to slide past the guard, but he catches you at the last second. He slams the cell door before you can escape. 💀"
    );
  } else {
    alert(
      "Invalid choice. The guard grows suspicious and you lose your chance."
    );
  }
} else {
  alert(
    "You hesitate and don't make a decision... time passes and nothing happens. (Invalid choice)"
  );
}
```

Let's walk through this code:

- If the first choice was "lock":
  - We display a scenario via alert about picking the lock.
  - We then prompt for the next choice (`choiceLock`), expecting "patronus" or "sneak".
  - Depending on `choiceLock`, we alert either a success or failure ending.
  - If the input was not recognized, we alert that it was invalid (and the escape opportunity is lost).
- If the first choice was "illness":
  - We simulate the guard checking in.
  - Prompt for `choiceIll`: "stun" or "slip".
  - Depending on input, alert success or failure.
  - Handle invalid input similarly.
- If the first choice was neither "lock" nor "illness", we handle that as an invalid initial choice.

The story outcomes:

- Two success endings (one for patronus path, one for stun path) with a 🎉 emoji for escape.
- Two failure endings (sneak path and slip path) with a 💀 emoji for being caught/failing.
- If any input was invalid, we have a fallback message that basically ends the story without success.

## 📖 Playing the Adventure

This code, when run in a browser environment, will show a series of pop-up messages (alerts) and prompts. It's a linear flow:

1. Intro alert,
2. Prompt for first decision,
3. Based on that, an alert describing consequence,
4. Prompt for second decision,
5. Alert with final outcome.

The user can play multiple times, choosing different options to see the various outcomes.

## 💡 Extensions and Ideas

- Add more branches or a third level of decision for a longer story.
- Random chance: e.g., even if you try "pick lock", maybe have a random chance it fails and you have to try something else. (This could be done with `Math.random()` to introduce an element of luck.)
- Input handling: currently, the user must type exact words ('lock', 'illness', etc.). We could make it case-insensitive by converting input to lowercase (`choice1.toLowerCase()`) before comparisons. Or accept just first letters ('l' or 'i').
- Preventing cancel: If prompt returns null (user canceled), our code treats it as an unrecognized input. We could detect `if(choice1 === null)` and break out or give a special message.

Creating this text adventure used everything from conditionals to prompts and alerts, giving a taste of interactive applications. It's a simple game, but expanding it can be a creative coding exercise.

With this project, you now have experience writing an interactive program. Finally, let's move to the Final Challenge where we'll combine many things to make a slightly more complex program: a Wizarding Tournament Scoreboard! This will be a culminating exercise for all your newfound coding skills.
