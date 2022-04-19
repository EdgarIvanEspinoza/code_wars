// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
	str = str
		.toLowerCase()
		.split(' ')
		.filter((word) => word !== '');
	if (str.length === 0) {
		return false;
	} else {
		words = str.map((s) => {
			return s[0].toUpperCase() + s.slice(1);
		});
		words.unshift('#');
		hashtag = words.join('');
		if (hashtag.length <= 140) {
			return hashtag;
		} else {
			return false;
		}
	}
}

console.log(
	generateHashtag(
		'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
	)
);
