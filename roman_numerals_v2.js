/*http://codingdojo.org/kata/RomanNumerals/
* Version 2
* April 3, 2017
*/

function numberToRomanNumeral(number){ // make a class whose state is the current roman numeral

	let roman_numeral = "";

	isOutsideRange(number);
	let thousands = findThousands(number);
	let hundreds = findHundreds(thousands);
	let tens = findTens(hundreds);
	findOnes(tens);

	function isOutsideRange(number){
		if (number > 9999 || number <= 0) {
			console.log(number + " is an unacceptable answer. This program will only translate numbers between 1 and 9999.");
		}
	}

	function findThousands(number){
		while (number >= 1000 && number < 10000) {
			roman_numeral += "M";
			number -= 1000;
		}
		return number; // return hash with roman numeral AND number
	}

	function findHundreds(number){
		while (number < 1000 && number >= 100) {
			if (number >= 900) {
				roman_numeral += "CM";
				number -= 900;
			}

			else if (number >= 500) {
				roman_numeral += "D";
				number -= 500;
			}

			else if (number >= 400) {
				roman_numeral += "CD";
				number -= 400;
			}

			else if ((number < 900 && number > 500) || (number < 400 && number >= 100)){
				roman_numeral += "C";
				number -= 100;
			}
		}
		return number;
	}

	function findTens(number) {
		while (number < 100 && number >= 10){
			if (number >= 90) {
				roman_numeral += "XC";
				number -= 90;
			}

			else if (number >= 50) {
				roman_numeral += "L";
				number -= 50;
			}

			else if (number >= 40) {
				roman_numeral += "XL";
				number -= 40;
			}

			else if ((number < 90 && number > 50) || (number < 40 && number >= 10)) {
				roman_numeral += "X";
				number -= 10;
			}
		}
		return number;
	}

	function findOnes(number) {
		while (number < 10 && number >= 1) {
			if (number >= 9) {
				roman_numeral += "IX";
				number -= 9;
			}

			else if (number >= 5) {
				roman_numeral += "V";
				number -= 5;
			}

			else if (number >= 4) {
				roman_numeral += "IV";
				number -= 4;
			}

			else if ((number < 9 && number > 5) || (number < 4 && number >= 1)) {
				roman_numeral += "I";
				number -= 1;
			}
		}
		return number;
	}

	if (number < 10000 && number > 0) {
		return console.log("The number " + number + " converts to the Roman Numeral " + roman_numeral + ".");
	}

}

numberToRomanNumeral(3856);
numberToRomanNumeral(127);
numberToRomanNumeral(0);
numberToRomanNumeral(10567);
