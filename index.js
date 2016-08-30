const rickroll = require('./rickroll.json');

function get(index) {
		if (index < 0 || index > rickroll.length -1) {
			throw new RangeError(
				'The index let you down. Run around and give a number between 0 and ' + (rickroll.lenght -1)
		);
	
	}
	return rickroll[index];
}

function getRandomNumber(min,max) {
	return min + Math.floor(Math.random() * max);
}

function random() {
	return get(
		getRandomNumber(0, rickroll.length-1)
	);
}

module.exports = {
	get: get,
	random: random,
};
