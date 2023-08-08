class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  dwellers = [];

  add = (person) => {
    this.dwellers.push(person);
  };
}

class Building {
  apartments = [];

  constructor(maxApartmentsAmount) {
    this.maxApartmentsAmount = maxApartmentsAmount;
  }

  addAparment = (apartment) => {
    if (this.apartments.length + 1 > this.maxApartmentsAmount) {
      console.log(
        "Error: unable to ad a new artment because there are too many apartments."
      );
      return;
    }

    this.apartments.push(apartment);
    console.log("New apartment has been added.");
  };
}

const person1 = new Person("Sasha", "male");
const person2 = new Person("Tanya", "female");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.add(person1);
apartment2.add(person1);
apartment2.add(person2);

const building = new Building(10);
building.addAparment(apartment1);
building.addAparment(apartment2);
