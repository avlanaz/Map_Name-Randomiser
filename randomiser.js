







styleSettings = {
	glottalApostropheEnabled: true,
	capitaliseEnabled: true,
	noConsecutiveConsonants: false,

	consonantFiller: "y",
}

const VOWELS = "aeiou";
const CONSONANTS = "qwrtypsdfghjklzxcvbnm";

function randomiseName(name) {
	var randName = "";
	var nameLength = name.length;
	while (nameLength > 0) {
		var index = Math.floor(Math.random() * nameLength);
		randName += name[index];
		name = name.substr(0, index) + name.substr(index + 1);
		nameLength--;
	}
	return randName;
}

function styleName(name) {
	// Start w/ first letter in
	name = name.toLowerCase();
	var newName = name[0].toUpperCase();
	for (let i = 0; i < name.length - 1; i++) {
		var letter = name[i];
		var nextLetter = name[i + 1];

		// Adds accent for two consecutive vowels
		if (styleSettings.glottalApostropheEnabled) {
			if (VOWELS.includes(letter) && VOWELS.includes(nextLetter)) {
				newName += "'";
			}
		}

		// Capitalise front letters
		if (styleSettings.capitaliseEnabled) {
			if ((letter === " ")) {
				nextLetter = nextLetter.toUpperCase();
			}
		}

		// Add "e" in between consonants
		if (styleSettings.noConsecutiveConsonants) {
			if (CONSONANTS.includes(letter) && CONSONANTS.includes(nextLetter)) {
				newName += styleSettings.consonantFiller;
			}
		}
		newName += nextLetter;
	}
	return newName;
}

capitals.forEach((capital) => {
	var newCapital = "";
	newCapital = randomiseName(capital.capital);
	newCapital = styleName(newCapital);
	console.log(capital.country + ": " + newCapital);
});













