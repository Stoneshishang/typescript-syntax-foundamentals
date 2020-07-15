const carMakers = ["ford", "toyota", "chevy"];
//or
const carMakers1: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

//Help with inference when extracting values
const carBrand = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values

//Help with 'map'
//receive each car as a string and string a string as well
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexiable types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-11-11");
importantDates.push(new Date());
