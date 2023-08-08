class Student {
  marks = [];
  visits = Array(25);

  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  getAge = () => {
    return new Date().getFullYear() - this.birthYear;
  };

  getAverageMark = () => {
    if (!this.marks.length) {
      return 0;
    }

    return this.marks.reduce((i1, i2) => i1 + i2) / this.marks.length;
  };

  setMark(mark) {
    this.marks.push(mark);
  }

  setVisit = (result) => {
    let done = false;
    for (let i = 0; i < 25; i++) {
      let it = this.visits[i];
      if (typeof it === "undefined") {
        this.visits[i] = result;
        done = true;
        break;
      }
    }
    if (!done) {
      console.log("Limit of visits has reached.");
    }
  };

  present = () => {
    this.setVisit(true);
  };

  absent = () => {
    this.setVisit(false);
  };

  summary = () => {
    const averageMark = this.getAverageMark();
    const averageVisit = this.visits.length
      ? this.visits.filter((v) => !!v).length / this.visits.length
      : 0;

    const resultList = [
      { match: (am, av) => am > 90 && av > 0.9, message: "Молодець!" },
      {
        match: (am, av) => (am < 90 && av > 0.9) || (am > 90 && av < 0.9),
        message: "Добре, але можна і краще",
      },
      { match: (am, av) => am <= 90 && av <= 0.9, message: "Редиска!" },
    ];

    const result = resultList.filter((r) =>
      r.match(averageMark, averageVisit)
    )[0];

    console.log(result.message);
  };
}

const sasha = new Student("Sasha", "Flanchyk", 10);
for (let i = 0; i < 25; i++) {
  sasha.present();
}
for (let i = 0; i < 10; i++) {
  sasha.setMark(100);
}

console.log("Sasha summary:");
sasha.summary();

const tanya = new Student("Tanya", "Flanchyk", 30);
for (let i = 0; i < 20; i++) {
  tanya.absent();
}
tanya.present();
tanya.present();

for (let i = 0; i < 10; i++) {
  tanya.setMark(1 + Math.random() * 78);
}

console.log("Tanya summary:");
tanya.summary();
