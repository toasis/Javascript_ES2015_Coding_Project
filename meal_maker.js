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
}
menu.addDishToCourse("mains", "steak", 69);
menu.addDishToCourse("appetizers", "bread", 5);
menu.addDishToCourse("desserts", "cake", 63249);
const meal = menu.getRandomDishFromCourse();
console.log(meal);
