let menu = {
    _course: {
        appetizers: [],
        mains: [],
        desserts: [],

        get appetizers() {
            console.log(`The course includes${this._course.appetizers},`);
            return this._course.appetizers,
        },

        set appetizers(newAppetizers) {

            if (typeof newAppetizers === 'string') {
                this._course.appetizers = newAppetizers;
            } else {
                console.log(`Please change ${newAppetizers} to string`);
            }

        },

        get mains() {
            console.log(`The course includes${this._course.mains},`);
            return this._course.mains,
        },
        set mains(newMains) {

            if (typeof newMains === 'string') {
                this._course.mains = newMains;
            } else {
                console.log(`Please change ${newMains} to string`);
            }
        },

        get desserts() {
            console.log(`The course includes${this._course.desserts},`);
            return this._course.desserts,
        },
        set desserts(newDesserts) {

            if (typeof newDesserts === 'string') {
                this._course.desserts = newDesserts;
            } else {
                console.log(`Please change ${newDesserts} to string`);
            }
        },

    },
get course(){
    console.log(`The course includes${this._course},`);
    return this._course,
},
set course(newCourse) {

    if (typeof newCourse === 'string') {
        this._course.course = newCourse;
    } else {
        console.log(`Please change ${newCourse} to string`);
    }
},
}
