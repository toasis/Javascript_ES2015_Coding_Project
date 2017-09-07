const getAllEvent = () => {
	return ['Marathon', 'Triathlon', 'Decathlon'];
};
/* this is used a few places and it is vulnerable */

const getRandomEvent = () => {
	const allEvents = getAllEvent();
	const event = allEvents[Math.floor(Math.random() * allEvents.length)];

 console.log(event);
	return event;

};

const getEventActivities = () => {
	const allEvents = getAllEvent();
	const event = allEvents[Math.floor(Math.random() * allEvents.length)];
	console.log(allEvents);
	let activities;
	if (!allEvents.includes(event)) {
		return null;
	}

	if (event === 'Marathon') {
		activities = ['Running'];
		return activities.join(', ');
	}
	if (event === 'Triathlon') {
		activities = ['Running', 'Cycling', 'Swimming'];
		return activities.join(', ');
	}
	if (event === 'Decathlon') {
		activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
		return activities.join(', ');
	}

};

const getDaysToTrain = () => {
	const allEvents = getAllEvent();
	const event = allEvents[Math.floor(Math.random() * allEvents.length)];
	const eventTrainingTimes = { 'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
	if (!allEvents.includes(event)) {
		return null;
	}

	return eventTrainingTimes[event];
};



const getEventMessge = ()=>{
	const myEvent = getRandomEvent();
	console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities() + '. You have ' + getDaysToTrain() + ' days to train.');
};
getEventMessge();
