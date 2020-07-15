class Vehicle {
  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  // color: string;

  constructor(public color: string) {
    // this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Cars extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle("orange");
// console.log(vehicle.color);

// vehicle.drive();
// vehicle.honk();

const cars = new Cars(4, "red");
cars.startDrivingProcess();

// cars.honk();
