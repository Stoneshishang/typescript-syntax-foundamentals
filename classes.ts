class Vehicle {
  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  public honk(): void {
    console.log("beep");
  }
}

class Cars extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle();

// vehicle.drive();
vehicle.honk();

const cars = new Cars();
cars.startDrivingProcess();
cars.honk();
