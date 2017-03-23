/*http://codingdojo.org/kata/RomanNumerals/
* Version 2
* March 23, 2017
*/

function numberToRomanNumeral(number){

	let num = number;
	let result = "";

	maxNumberAllowed(number);
	hasThousand(number);
	hasHundreds(number);
	hasTens(number);
	hasOnes(number);

	function maxNumberAllowed(number){
		if (num > 9999) {
			console.log("This program will only translate numbers equal to or less than 9999.");
			console.log("Goodbye!");
		}
	}

	function hasThousand(number){
		while (num >= 1000 && num < 10000) {
			result += "M";
			num -= 1000;
		}
	}

	function hasHundreds(number){
		while (num < 1000 && num >= 100) {
			if (num >= 900) {
				result += "CM";
				num -= 900;
			}

			else if (num >= 500) {
				result += "D";
				num -= 500;
			}

			else if (num >= 400) {
				result += "CD";
				num -= 400;
			}

			else if ((num < 900 && num > 500) || (num < 400 && num >= 100)){
				result += "C";
				num -= 100;
			}
		}
	}

	function hasTens(number) {
		while (num < 100 && num >= 10){
			if (num >= 90) {
				result += "XC";
				num -= 90;
			}

			else if (num >= 50) {
				result += "L";
				num -= 50;
			}

			else if (num >= 40) {
				result += "XL";
				num -= 40;
			}

			else if ((num < 90 && num > 50) || (num < 40 && num >= 10)) {
				result += "X";
				num -= 10;
			}
		}
	}

	function hasOnes(number) {
		while (num < 10 && num >= 1) {
			if (num >= 9) {
				result += "IX";
				num -= 9;
			}

			else if (num >= 5) {
				result += "V";
				num -= 5;
			}

			else if (num >= 4) {
				result += "IV";
				num -= 4;
			}

			else if ((num < 9 && num > 5) || (num < 4 && num >= 1)) {
				result += "I";
				num -= 1;
			}
		}
	}

	if (number < 10000) {
		return console.log("The number " + number + " converts to the Roman Numeral " + result + ".");
	}

}

numberToRomanNumeral(3856);
