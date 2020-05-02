
class Person {
  constructor( name = "anon", age =0) {
    this.name = name;
    this.age = age;
    }
    getGreeting() {
        return `Hi i am ${this.name}. `
    }
    getDescription() {
        return `${this.name} is ${this.age} years old. `
    }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
      let description = super.getDescription();

      if (this.hasMajor()) {
            description += `Their major is ${this.major}.`
        }

      return description;
  }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
           greeting += `I am visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}





const me = new Student( "Julian", 20, "Programming");
const traveler = new Traveller("dad", 30, "Oslo");
const otherTraveller = new Traveller("mom", 45);

const other = new Student();

console.log(me.hasMajor());
console.log(other.hasMajor())
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other.getDescription());
console.log(traveler.getGreeting())
console.log(otherTraveller.getGreeting());
