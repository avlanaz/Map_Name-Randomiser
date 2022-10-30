placeNames = [
	"london",
	"new york",
	"andorra la vella"
]

function randomiseName(name) {
	var randName = "";
	var nameLength = name.length;
	while (nameLength > 0) {
		var index = Math.floor(Math.random()*nameLength);
		randName += name[index];
		name = name.substr(0, index) + name.substr(index+1);
		nameLength--;
	}
	console.log(randName);
}

placeNames.forEach(placeName => {
	randomiseName(placeName);
});