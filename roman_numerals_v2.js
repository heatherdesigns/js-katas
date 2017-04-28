/*http://codingdojo.org/kata/RomanNumerals/
* Version 2
* April 11, 2017
*/

class NumberToRomanNumeral {     // now a class, was a function
	constructor (number) {
		this.num = number;
	}

	// removed global variable representing the roman numeral

	get isOutsideRange(){
		if (this.num > 9999 || this.num <= 0) {
			console.log(this.num + " is an unacceptable answer. This program will only translate numbers between 1 and 9999.");
		}
	}

	get findThousands() {
		let roman_numeral = "";
		while (this.num >= 1000 && this.num < 10000) {
			roman_numeral += "M";
			this.num -= 1000;
		}
		let numRomanSet = { num: this.num, roman: roman_numeral };
		return numRomanSet;  // functions now return an object
	}

	get findHundreds() {
		let roman_numeral = "";
		while (this.num < 1000 && this.num >= 100) {
			if (this.num >= 900) {
				roman_numeral += "CM";
				this.num -= 900;
			}

			else if (this.num >= 500) {
				roman_numeral += "D";
				this.num -= 500;
			}

			else if (this.num >= 400) {
				roman_numeral += "CD";
				this.num -= 400;
			}

			else if ((this.num < 900 && this.num > 500) || (this.num < 400 && this.num >= 100)){
				roman_numeral += "C";
				this.num -= 100;
			}
		}
		let numRomanSet = { num: this.num, roman: roman_numeral };
		return numRomanSet;
	}

	get findTens() {
		let roman_numeral = "";
		while (this.num < 100 && this.num >= 10){
			if (this.num >= 90) {
				roman_numeral += "XC";
				this.num -= 90;
			}

			else if (this.num >= 50) {
				roman_numeral += "L";
				this.num -= 50;
			}

			else if (this.num >= 40) {
				roman_numeral += "XL";
				this.num -= 40;
			}

			else if ((this.num < 90 && this.num > 50) || (this.num < 40 && this.num >= 10)) {
				roman_numeral += "X";
				this.num -= 10;
			}
		}
		let numRomanSet = { num: this.num, roman: roman_numeral };
		return numRomanSet;
	}

	get findOnes() {
		let roman_numeral = "";
		while (this.num < 10 && this.num >= 1) {
			if (this.num >= 9) {
				roman_numeral += "IX";
				this.num -= 9;
			}

			else if (this.num >= 5) {
				roman_numeral += "V";
				this.num -= 5;
			}

			else if (this.num >= 4) {
				roman_numeral += "IV";
				this.num -= 4;
			}

			else if ((this.num < 9 && this.num > 5) || (this.num < 4 && this.num >= 1)) {
				roman_numeral += "I";
				this.num -= 1;
			}
		}
		let numRomanSet = { num: this.num, roman: roman_numeral };
		return numRomanSet;
	}

}

let newNumber = new NumberToRomanNumeral(3856);
const ORIG_NUM = newNumber.num;

newNumber.isOutsideRange;
let thousandsOjb = newNumber.findThousands;
let hundredsObj = newNumber.findHundreds;
let tensObj = newNumber.findTens;
let onesObj = newNumber.findOnes;

if (((ORIG_NUM) < 10000) && ((ORIG_NUM) > 0)) {
	console.log("The number " + ORIG_NUM + " converts to the Roman Numeral "
	+ Object.values(thousandsOjb)[1] + Object.values(hundredsObj)[1]
	+ Object.values(tensObj)[1] + Object.values(onesObj)[1] + ".");
}
