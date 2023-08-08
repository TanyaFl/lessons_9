class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo = () => {
    return `Name - ${this.name}, age: ${this.age} years.`;
  };
}

class Car {
  constructor(mark, model, year, number) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.number = number;
  }

  setOwner(owner) {
    if (owner.age < 18) {
      console.log("This owner is too young to have a car.");
      return;
    }

    this.owner = owner;
  }

  getInfo = () => {
    console.log(
      `Car Information:\r\nMark: ${this.mark}, model: ${this.model}, year: ${
        this.year
      }, number: ${this.number}.\r\n\Owner info: ${
        this.owner ? this.owner.getInfo() : "none"
      }`
    );
  };
}

const p1 = new Human("Sasha", 40);
console.log(p1.getInfo());

const p2 = new Human("Tanya", 30);
console.log(p2.getInfo());

const skoda = new Car("Skoda", "Octavia", 2012, "AX3725HK");
skoda.setOwner(p1);
skoda.getInfo();

skoda.setOwner(p2);
skoda.getInfo();
