let menu = {
    _course: {
        _appetizers: [],
        _mains: [],
        _dessets: [],
        set appetizers(appetizerIn) {},
        get appetizers() {
            //return ...;
        },
        set mains(mainIn) {},
        get mains() {
            //return ...;
        },
        set dessets(desertIn) {},
        get deserts() {
            // return ...;
        }
    },
    get courses() {
        return {
            appetizers: this._course._appetizers,
            mains: this._course._mains,
            deserts: this._course._dessets
        };
    },
    addDishToCourse: function(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        };
        this._course[courseName].push(dish);
    },
    getRandomDishFromCourse: function(...) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        // return a dish from `dishes` by using `randomIndex`
    }
};
