class Media {
  constructor(title) {//这里constructor的名字title要放倒子类的surper（）的圆括号里
    this._title = title;
    this._isCheckOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckOut() {
    return this._isCheckOut;
  }
  set isCheckout(newStatusOfCheckout) {
    if (typeof newStatusOfCheckout === 'booleans') {
      this.isCheckOut = newStatusOfCheckout;
    } else {
      console.log(`Please change ${newStatusOfCheckout} to booleans `);
    }
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckOut = !this._CheckOut;
  }
  getAverageRating() {
    let rating = this.ratings;
    let average = ratings.reduce(function (currentSum, rating) {
      return (currentSum + rating) / this.ratings.length;
    }, 0);
    return average;
    // 	//对reduce怎么使用没有完全理解
  }
  getAverageRating() {
    let length = this.ratings.length;
    return this.ratings.reduce(function (currentSum, rating) {
      return (currentSum + rating) / length;
    }, 0); //Just note that we need to return our average and this variable is not the same inside the reduce function
  }
  getAverageRating() {
    let sum = this.ratings.reduce((sum, rating) => sum + rating, 0);
    return sum / this.ratings.length;
  }
  addRating(newRating) {
    return this.ratings.push(newRating);
  }
}


class Books extends Media {
  constructor(title, pages, author) {
    super(title);
    this._pages = pages;
    this._author = author;
  }
  get pages() {
    return this._pages;
  }
  get author() {
    return this._author;
  }
}
class Movies extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = 60;

  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }

}
class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

console.log(Books);
console.log(CD);
console.log(Movies);

// A new instance of books
const historyOfEverything = new Books('A Short History of Nearly Everything', 544, 'Bill Bryson');

console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);
//A new instance of moives
const speed = new Movies('Speed', 'Jan de Bont', 116);
console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);

//A new instance of CDs
const youAreMyLove = new CD('You are my love', 'Cocol Lee', ['song1', 'song2', 'song2']);
console.log(youAreMyLove);
youAreMyLove.toggleCheckOutStatus();
youAreMyLove.toggleCheckOutStatus();
console.log(youAreMyLove._isCheckOut);
youAreMyLove.addRating(2);
youAreMyLove.addRating(5);
youAreMyLove.addRating(3);
console.log(youAreMyLove._songs);
console.log(youAreMyLove.getAverageRating());
console.log(youAreMyLove);

