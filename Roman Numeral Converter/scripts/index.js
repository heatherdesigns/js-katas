function numberToRomanNumeral(userInput){

  if (isOutsideRange(userInput) || isAstring(userInput)) {
    throw userInput + " is an unacceptable answer. Please enter a number between 1 and 9999.";
  }

let thousands = findThousands(userInput);
let hundreds = findHundreds(Object.values(thousands)[0]);
let tens = findTens(Object.values(hundreds)[0]);
let ones = findOnes(Object.values(tens)[0]);

	function isOutsideRange(userInput){
		if (userInput > 9999 || userInput <= 0) {
			return true;
		}
    return false;
	}

  function isAstring(userInput){

    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                         "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let count = 0; count < letters.length; count++) {
      userInput = userInput.toLowerCase();
     	if (userInput.charAt(0) == letters[count]) {
        console.log(userInput.charAt(0) + " This isn't a number!");
        return true;
      }
    }
    return false;
  }

	function findThousands(number){
		let roman_numeral = "";                     // moved roman numeral inside function
    while (number >= 1000 && number < 10000) {
			roman_numeral += "M";
			number -= 1000;
		}
		let numRomanSet = { num: number, roman: roman_numeral };
    return numRomanSet;                         // return an object
	}
	console.log("num thousands: " + Object.values(thousands)[0]);
	console.log("roman numeral thousands: " + Object.values(thousands)[1]);

	function findHundreds(number){
		let roman_numeral = "";
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
		let numRomanSet = { num: number, roman: roman_numeral };
    return numRomanSet;
	}

	console.log("num hundreds: " + Object.values(hundreds)[0]);
	console.log("roman numeral hundreds: " + Object.values(hundreds)[1]);

	function findTens(number) {
		let roman_numeral = "";
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
		let numRomanSet = { num: number, roman: roman_numeral };
    return numRomanSet;
	}

	console.log("num tens: " + Object.values(tens)[0]);
	console.log("roman numeral tens: " + Object.values(tens)[1]);

	function findOnes(number) {
		let roman_numeral = "";
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
		let numRomanSet = { num: number, roman: roman_numeral };
		console.log("Numerical balance should be zero. It is " + Object.values(numRomanSet)[0]);
		return numRomanSet;
	}

	console.log("End of number to roman numeral conversion.");

	if (userInput < 10000) {
		return Object.values(thousands)[1] + Object.values(hundreds)[1] + Object.values(tens)[1] + Object.values(ones)[1];
	}

}

var inputNumber = document.querySelector('#js__input-number');      // update variable, id & class names
var submitBtn = document.querySelector('.js__submit-btn');
var displayRomanNumeral = document.querySelector('.js__display-roman-numeral');


submitBtn.addEventListener('click', () => {
  var output = "";

  try {
    output = numberToRomanNumeral(inputNumber.value);
  }
  catch (err) {
    output = "WARNING: " + err;
  }

  displayRomanNumeral.textContent = output;
});
