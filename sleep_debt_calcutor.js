const getSleepHours = (day) => {
	switch (day) {
	case 'Monday':
		return 8;
		break;
	case 'Tuesday':
		return 7.5;
		break;
	case 'Wednesday':
		return 7;
		break;
	case 'Thursday':
		return 6.5;
		break;
	case 'Friday':
		return 6;
		break;
	case 'Saturday':
		return 10.5;
		break;
	default ://'Sunday':
		return 11;
	}
	console.log(getSleepHours());
};
const getActualSleepHours = () => {
	return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +
								getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +
								getSleepHours();
};
const getIdealSleepHours = () => {
	let idealHours = 10;
	return idealHours * 7;

};
const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	console.log(actualSleepHours);
	let idealSleepHours = getIdealSleepHours();
	console.log(idealSleepHours);
	if (actualSleepHours === idealSleepHours) {
		console.log('you have a perfect sleep');
	} else if (actualSleepHours < idealSleepHours) {
		console.log('you have less sleep, please take more sleep');
	} else {
		console.log('you have too much sleep, please use more time to work');
	}
};
calculateSleepDebt();
