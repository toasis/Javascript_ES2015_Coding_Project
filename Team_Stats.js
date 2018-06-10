const team = {
  _players: [{
    firstName: 'Tom',
    lastName: 'Ford',
    age: '22'

  }, {
    firstName: 'Jack',
    lastName: 'Fox',
    age: '25'
  }, {
    firstName: 'Alex',
    lastName: 'Wang',
    age: '27'
  }],
  // get method for _players object
  get firstName() {
    console.log(`Please change ${this._players.firstName} to string`);
    return this._players.firstName;

  },
  get lastName() {
    console.log(`Please change ${this._players.lastName} to string`);
    return this._players.lastName;

  },
  get age() {
    console.log(`Please change ${this._players.age} to number`);
    return this._players.age;

  },
  _games: [{
    opponent: 'Broncos',
    teamPoints: 32,
    opponentPoints: 22

  }, {
    opponent: 'Broncosbb',
    teamPoints: 42,
    opponentPoints: 27

  }, {
    opponent: 'Broncoscc',
    teamPoints: 29,
    opponentPoints: 23
  }],
  //get method for _games object
  get opponent() {
    console.log(`Please change ${this._games.opponent} to string`);
    return this._games.opponent;

  },
  get teamPoints() {
    console.log(`Please change ${this._games.teamPoints} to number`);
    return this._games.teamPoints;

  },
  get opponentPoints() {
    console.log(`Please change ${this._games.opponentPoints} to number`);
    return this._games.opponentPoints;

  },
  // add player method
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },
  //add game method
addteam(opponent, teamPoints, opponentPoints) {
  let team = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  };

  this.games.push(game);
},

};

team.addPlayer('Steph', 'Curry', '28');
team.addGame("Titans", 100, 98);
console.log(team);


