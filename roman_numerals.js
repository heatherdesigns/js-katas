// http://codingdojo.org/kata/RomanNumerals/
// March 21, 2017

// solution provided by http://www.selftaughtjs.com/algorithm-sundays-converting-roman-numerals/

function convertToRoman(number){

	var result = "";
	var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

	for (var count = 0; count < digits.length; count++){
		while (number%digits[count] < number){
			result += romans[count];  			
			number -= digits[count];
		}
	}
	return result;
}

console.log(convertToRoman(999));
console.log(convertToRoman(23));
console.log(convertToRoman(167));
