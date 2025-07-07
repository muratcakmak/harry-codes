# Chapter 11: Build a House Points Tracker

One of the most iconic features of Hogwarts is the House Points system – where Gryffindor, Hufflepuff, Ravenclaw, and Slytherin compete for the House Cup. In this project, we'll create a simple House Points Tracker in JavaScript. Our tracker will allow us to award (or deduct) points from each house and keep a tally of the scores.

## 🎯 Project Goal

We want to be able to do the following:

- Initialize points for each of the four houses (starting at 0).
- Award points to a specific house.
- Deduct points from a specific house (hopefully not too often, unless Snape is around).
- Display the current points for all houses at any time.

This project will primarily use variables (or an array/object) to store the points and functions to update the points.

## 🏗 Setting Up House Points Variables

Let's start by representing the points. We have four houses: Gryffindor, Hufflepuff, Ravenclaw, Slytherin. We can create a variable for each:

```js
let gryffindorPoints = 0;
let hufflepuffPoints = 0;
let ravenclawPoints = 0;
let slytherinPoints = 0;
```

Alternatively, we could use an array or object to hold these, but separate variables are straightforward for now.

## ✨ Function to Award Points

Now, let's make a function to award points. We'll call it `awardPoints`. It should take two parameters: the house name and the number of points (which could be positive for awarding or negative for deducting).

```js
let awardPoints = (house, points) => {
  if (house === "Gryffindor") {
    gryffindorPoints += points;
  } else if (house === "Hufflepuff") {
    hufflepuffPoints += points;
  } else if (house === "Ravenclaw") {
    ravenclawPoints += points;
  } else if (house === "Slytherin") {
    slytherinPoints += points;
  } else {
    console.log("Unknown house:", house);
    return;
  }

  // Ensure points don't go negative (optional rule)
  if (gryffindorPoints < 0) gryffindorPoints = 0;
  if (hufflepuffPoints < 0) hufflepuffPoints = 0;
  if (ravenclawPoints < 0) ravenclawPoints = 0;
  if (slytherinPoints < 0) slytherinPoints = 0;

  console.log(house + " now has " + pointsForHouse(house) + " points.");
};
```

A few things are happening here:

- We check which house the `house` parameter matches, and add the given points to that house's counter. `+=` adds (or subtracts if points is negative).
- If the house doesn't match any of the four, we log an "Unknown house" message and return early (guard clause to exit if input is invalid).
- Then, we optionally ensure no house has negative points (you could allow negative if you want, but typically house points floor at 0). We check each and reset to 0 if it went negative.
- Finally, we log the house's new point total. We used a helper function `pointsForHouse(house)` to get the current points of a given house to include in the message. We should define that function as well.

Let's write the helper function `pointsForHouse`:

```js
let pointsForHouse = (house) => {
  if (house === "Gryffindor") return gryffindorPoints;
  if (house === "Hufflepuff") return hufflepuffPoints;
  if (house === "Ravenclaw") return ravenclawPoints;
  if (house === "Slytherin") return slytherinPoints;
  return null;
};
```

This returns the points variable corresponding to the house name (or null if the house name is not recognized). We use it in the log to avoid repeating code to determine which variable to read.

## 📝 Using the Tracker

Now, let's test our tracker by awarding and deducting some points:

```js
console.log("Starting points for all houses are 0.");

// Award some points
awardPoints("Gryffindor", 50);
awardPoints("Hufflepuff", 20);
awardPoints("Ravenclaw", 30);
awardPoints("Slytherin", 15);

// Deduct some points
awardPoints("Gryffindor", -10); // oops, got a penalty of 10
awardPoints("Slytherin", -5); // Slytherin lost 5 points

// Award more points
awardPoints("Hufflepuff", 10);
awardPoints("Ravenclaw", 5);

// Display final tallies
console.log("Final House Points:");
console.log("Gryffindor:", gryffindorPoints);
console.log("Hufflepuff:", hufflepuffPoints);
console.log("Ravenclaw:", ravenclawPoints);
console.log("Slytherin:", slytherinPoints);
```

Assuming we followed the steps:

- Gryffindor gets 50, then loses 10, so ends with 40.
- Hufflepuff gets 20, then 10 more, so 30.
- Ravenclaw gets 30, then 5, so 35.
- Slytherin gets 15, loses 5, so 10.

The console output should trace through all the `awardPoints` calls, for example:

```
Starting points for all houses are 0.
Gryffindor now has 50 points.
Hufflepuff now has 20 points.
Ravenclaw now has 30 points.
Slytherin now has 15 points.
Gryffindor now has 40 points.
Slytherin now has 10 points.
Hufflepuff now has 30 points.
Ravenclaw now has 35 points.
Final House Points:
Gryffindor: 40
Hufflepuff: 30
Ravenclaw: 35
Slytherin: 10
```

This gives a running commentary of points changes and then a final summary.

## 💡 Possible Enhancements

- Input Handling: Right now, we call `awardPoints` manually. In a more interactive program, you might want to read input (like prompt) where a user types which house and how many points to award. That would require string parsing and is an advanced step beyond our current scope.
- Validation: We did a basic check for unknown house names. We could also validate that the points parameter is a number, or cap points at certain values if desired.
- Objects/Arrays: Using separate variables works, but it might be cleaner to store points in an object like:

```js
let housePoints = {
  Gryffindor: 0,
  Hufflepuff: 0,
  Ravenclaw: 0,
  Slytherin: 0,
};
```

Then `awardPoints` becomes:

```js
housePoints[house] += points;
```

if house is a key in that object. We didn't formally cover objects in this book, but it's a peek at a slightly more advanced concept.

- Final Ranking: We could easily determine which house has the highest points using logic similar to the champion logic in the dueling club.

This House Points Tracker is a simple simulation of what goes on during the school year at Hogwarts. It's a great example of using variables to track state (points) and functions to update that state with logic.

Now that we have the points system down, let's move on to something more whimsical: creating a Magical Pet Generator that can conjure up random fantastical pet names!
