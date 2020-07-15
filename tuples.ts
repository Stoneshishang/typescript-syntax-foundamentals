const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// This doesn't create an array, it creates an idea of tuple in our app.
// It's a brand new type
// This is called Type alias
type Drink = [string, boolean, number];

// Tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// above pepsi is equvalent of below coke.
const coke: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["green", false, 0];
