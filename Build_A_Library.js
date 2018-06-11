class Media {
  constructor(title) {
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
    if (typeof newStatusOfCheckout = 'booleans') {
      this.isCheckout = newStatusOfCheckout;
    } else {
      console.log(`Please change ${newStatusOfCheckout} to booleans `);
    }
    get ratings() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
      this._isCheckOut = !this._CheckOut;
    }
    // getAverageRating() {
    // 	let rating = this.ratings;
    // 	let average = ratings.reduce(function (currentSum, rating) {
    // 		return (currentSum + rating) / this.ratings.length;
    // 	}, 0);
    // 	return average;
    // 	//对reduce怎么使用没有完全理解
    // }
    // getAverageRating() {
    // 	let length = this.ratings.length;
    // 	return this.ratings.reduce(function ( currentSum, rating) {
    // 		return (currentSum + rating) / length;
    // 	},0);//Just note that we need to return our average and this variable is not the same inside the reduce function
    // }
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
    constructor(title, director) {
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
  const historyOfEverything = new Books('A Short History of Nearly Everything', 544, 'Bill Bryson');
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  const speed = new Movies('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
