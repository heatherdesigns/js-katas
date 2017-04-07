require('./roman_numerals_v2.js');

let newNumber = new NumberToRomanNumeral(3856);
const ORIG_NUM = newNumber.num;

newNumber.isOutsideRange;
newNumber.findThousands;
newNumber.findHundreds;
newNumber.findTens;
newNumber.findOnes;

if (((ORIG_NUM) < 10000) && ((ORIG_NUM) > 0)) {
	console.log("The number " + ORIG_NUM + " converts to the Roman Numeral "
	+ Object.values(newNumber.findThousands)[1] + Object.values(newNumber.findHundreds)[1]
	+ Object.values(newNumber.findTens)[1] + Object.values(newNumber.findOnes)[1] + ".");
}
