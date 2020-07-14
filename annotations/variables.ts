//If we use initalization and declaration at the same line,
//typscript will be doing the inference automatically.
let apples: number = 5;
// is equal to
let banna = 6;

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classese
class Car {}

let car: Car = new Car();

//Object literial
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
//lecture 17 udemy
// We are writing a function that has NO return. a number i as an argument and no return
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x":10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) when we declare a variable on one line and initializate it later
let words = ["red", "green", "blue"];
let foundWord = false;
//let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3) Variable whose type cannot be inferred correctly.
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

// BAD practice!! but occasionally has its use.
// When we need one single variable has two different types.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
