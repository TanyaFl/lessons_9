class PriceItem {
  constructor(key, price, calories) {
    this.key = key;
    this.price = price;
    this.calories = calories;
  }
}

const Types = Object.freeze({
  SIZE_SMALL: new PriceItem("small", 50, 20),
  SIZE_BIG: new PriceItem("big", 100, 40),
});

const Options = Object.freeze({
  CHEESE: new PriceItem("cheese", 10, 20),
  SALAT: new PriceItem("salat", 20, 5),
  POTATO: new PriceItem("potato", 15, 10),
  MAYO: new PriceItem("mayo", 20, 5),
  SAUCE: new PriceItem("sauce", 15, 0),
});

class Hamburger {
  options = [];

  constructor(size, option) {
    this.size = size;
    this.options.push(option);
  }

  addOption = (option) => {
    if (
      option &&
      option.key &&
      !this.options.filter((o) => o.key == option.key)[0]
    ) {
      this.options.push(option);
    }
  };

  calculate = () => {
    const sizeCalories = this.size.calories;
    const optionsSumCalories = this.options
      .map((o) => o.calories)
      .reduce((o1, o2) => o1 + o2);
    return sizeCalories + optionsSumCalories;
  };

  calculatePrice = () => {
    const sizePrice = this.size.price;
    const optionsSumPrice = this.options
      .map((o) => o.price)
      .reduce((p1, p2) => p1 + p2);
    return sizePrice + optionsSumPrice;
  };
}

const myHumburger = new Hamburger(Types.SIZE_BIG, Options.CHEESE);
console.log(`Calories: ${myHumburger.calculate()}`);
console.log(`Price: ${myHumburger.calculatePrice()}`);

myHumburger.addOption(Options.SALAT);

console.log(`Calories: ${myHumburger.calculate()}`);
console.log(`Price: ${myHumburger.calculatePrice()}`);
