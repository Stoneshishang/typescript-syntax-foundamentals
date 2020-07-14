// adding anotations for the type of value that the function is going to return
const add = (a: number, b: number): number => {
  return a + b;
};

//Above function is the same as type inference shown below,
// but we have to use : number, if we don't, if we forgot to type return,
// typescript won't have any error.
const add1 = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

//Annoymous function assign to variables.
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

//Every time there is error, the function will techniquically not return anything.
//We are never going to reach the end of this function.
//Very RARE corner case.
const throwError = (message: string): never => {
  throw new Error(message);
};

//In reality, most time we use this.
const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

//Or this
const throwError2 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//ES2015, object destructing
const logWeather1 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
