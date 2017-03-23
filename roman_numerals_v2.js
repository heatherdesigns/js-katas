/*http://codingdojo.org/kata/RomanNumerals/
* Version 2
* March 22, 2017
*/

function numberToRomanNumeral(number){

	let num = number; // must set number to a global variable in order to modify it
	let result = "";
	hasThousand(num);
	hasHundreds(num);
	hasTens(num);
	hasOnes(num);

	function hasThousand(number){
		if (num == 1000){
			result += "M";
			num -= 1000;
		}
	}

	function hasHundreds(number){

	}

	function hasTens(number){

	}

	function hasOnes(number){

	}
	return console.log("The number " + number + " converts to the Roman Numeral " + result + ".");
}

numberToRomanNumeral(1000);
