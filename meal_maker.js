let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      // console.log(`The courses includes${this._appetizers},`);
      return this._appetizers;
    },

    set appetizers(newAppetizers) {
      if (typeof newAppetizers === "string") {
        this._appetizers = newAppetizers;
      } else {
        console.log(`Please change ${newAppetizers} to string`);
      }
    },

    get mains() {
      // console.log(`The courses includes${this._mains},`);
      return this._mains;
    },
    set mains(newMains) {
      if (typeof newMains === "string") {
        this._mains = newMains;
      } else {
        console.log(`Please change ${newMains} to string`);
      }
    },

    get desserts() {
      // console.log(`The courses includes${this._desserts},`);
      return this._desserts;
    },
    set desserts(newDesserts) {
      if (typeof newDesserts === "string") {
        this._desserts = newDesserts;
      } else {
        console.log(`Please change ${newDesserts} to string`);
      }
    }
  },

  /*  questions:
 question 1: The three functions below should exsit inside this object menu or outside?
 question 2: Is it possible to use an arrow function as one of key-value pairs of an object? if yes, how?
 answer2: Because arrow function is a function expression, it should not be in an object as its method.
 question 3: Is there any automatic way to write aan object's getter and setter?  Why they are necessary? They make the program much longer.
 answer3: No automatic way but
 if you get in the habit they tend to be formulaic enough.They 're necessary as a best practice for providing an interface to interact with object properties. They can also be very helpful for catching user errors like what you have in the mains setter now.
 */

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
   getRandomDishFromCourse(courseName){
     let dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random()*dishes.length);
     return dishes[randomIndex];

   },
  getRandomMeal(){
    const appetizers = this.getRandomDishFromCourse("appetizers");
    const mains = this.getRandomDishFromCourse("mains");
    const desserts = this.getRandomDishFromCourse("desserts");
    const totalPrices = appetizers.price + mains.price + desserts.price;
    return `Your meal is ${appetizers.name}, ${mains.name}, ${
      desserts.name
    } , the price is ${totalPrices}.`;
  },
};

menu.addDishToCourse("mains", "steak", 69);
menu.addDishToCourse("appetizers", "bread", 5);
menu.addDishToCourse("desserts", "cake_2", 2);
menu.addDishToCourse("mains", "steak_2", 44);
menu.addDishToCourse("appetizers", "bread_2", 6);
menu.addDishToCourse("desserts", "cake-2", 1);
menu.getRandomDishFromCourse("mains");
console.log(menu.getRandomMeal());
