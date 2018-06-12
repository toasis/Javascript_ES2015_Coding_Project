let menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

        get appetizers() {
            console.log(`The courses includes${this._courses.appetizers},`);
            return this._courses.appetizers
        },

        set appetizers(newAppetizers) {

            if (typeof newAppetizers === 'string') {
                this._courses.appetizers = newAppetizers;
            } else {
                console.log(`Please change ${newAppetizers} to string`);
            }

        },

        get mains() {
            console.log(`The courses includes${this._courses.mains},`);
            return this._courses.mains
        },
        set mains(newMains) {

            if (typeof newMains === 'string') {
                this._courses.mains = newMains;
            } else {
                console.log(`Please change ${newMains} to string`);
            }
        },

        get desserts() {
            console.log(`The courses includes${this._courses.desserts},`);
            return this._courses.desserts
        },
        set desserts(newDesserts) {

            if (typeof newDesserts === 'string') {
                this._courses.desserts = newDesserts;
            } else {
                console.log(`Please change ${newDesserts} to string`);
            }
        }

    },
    get courses() {
        console.log(`The courses includes${this._courses},`);
        return this._courses
    },
    set courses(newCourses) {

        if (typeof newCourses === 'string') {
            this._courses.courses = newCourses;
        } else {
            console.log(`Please change ${newCourses} to string`);
        }
    },
 /*  questions:
 question 1: The three functions below should exsit inside this object menu or outside?
 question 2: Is it possible to use an arrow function as one of key-value pairs of an object? if yes, how?
 question 3: Is there any automatic way to write aan object's getter and setter?  Why they are necessary? They make the program much longer.
 */

    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random().dishes.length);

    },

    getRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('apptizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrices = appetizers.price + mains.price + desserts.price;
        return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name} , the price is ${totalPrices}.`;
    }
};



menu.addDishToCourse("mains", "steak", 69);
menu.addDishToCourse("appetizers", "bread", 5);
menu.addDishToCourse("desserts", "cake_2", 2);
menu.addDishToCourse("mains", "steak_2", 44);
menu.addDishToCourse("appetizers", "bread_2", 6);
menu.addDishToCourse("desserts", "cake-2", 1);
getRandomDishFromCourse("mains");
getRandomMeal();
