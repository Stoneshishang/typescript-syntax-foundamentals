const profile = {
  name1: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// the value 'profile' to have a structure is an object with age property that is number.
// above ES2015 is equal to below object destructing
//Might not be very clear, these are corner cases.
//Udemy lecture 28

// const { age }: { age: number } = profile;

const { age, name1 }: { age: number; name1: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
