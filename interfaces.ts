interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  //add a function inside of interface
  summary(): string;
}

// Make a more generic intereface,
// make the code more reuseable.
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  broken: true,
  year: new Date(),
  summary(): string {
    return `Name:${this.name}`;
  },
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

// printVehicle(oldCivic);

//using a more generic interface for very distinct objects.
printSummary(oldCivic);
printSummary(drinks);
