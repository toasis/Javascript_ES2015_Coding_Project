const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
		return userInput;
	} else {
		console.log('Wrong Input!');
	}
};
const getComputerChoice = () => {
	let randomChoice = Math.floor(Math.random() * 3);
	switch (randomChoice) {
	case 0:
		return 'rock';
		break;
	case 1:
		return 'paper';
		break;
	default: // 2
		return 'scissors';
		break;
	}

};
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return 'Game is a tie!';
	} else if (userChoice === 'bomb') {
		return 'A bomb win!';
	} else {
		if (userChoice === 'rock' && computerChoice === 'scissors') {
			return 'User wins!';
		} else if (userChoice === 'scissors' && computerChoice === 'paper') {
			return 'User wins!';
		} else if (userChoice === 'paper' && computerChoice === 'rock') {
			return 'User wins!';
		} else if (computerChoice === 'rock' && userChoice === 'scissors') {
			return 'Computer wins!';
		} else if (computerChoice === 'scissors' && userChoice === 'paper') {
			return 'Computer wins!';
		} else if (computerChoice === 'paper' && userChoice === 'rock') {
			return 'Computer wins!';
		}
	}
};
const playGame = (userChoice, computerChoice) => {
	userChoice = getUserChoice('paper');
	console.log(userChoice);
	computerChoice = getComputerChoice();
	console.log(computerChoice);
	console.log(determineWinner(userChoice, computerChoice));
};
playGame();
