function numberToRomanNumeral(userInput){

	let roman_numeral = ""; // make a class whose state is the current roman numeral

  if (isOutsideRange(userInput) || isAstring(userInput)) {
    throw userInput + " is an unacceptable answer. Please enter a number between 1 and 9999.";
  }

let thousands = findThousands(userInput);
let hundreds = findHundreds(thousands);
let tens = findTens(hundreds);
findOnes(tens);

	function isOutsideRange(userInput){
		if (userInput > 9999 || userInput <= 0) {
			return true;
		}
    return false;
	}

  function isAstring(userInput){
    if (userInput) { console.log(userInput); }

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
    while (number >= 1000 && number < 10000) {
			roman_numeral += "M";
			number -= 1000;
      console.log("After thousands: " + number);
		}
    return number; // return roman numerla AND number
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
    console.log("After hundreds: " + number);
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
    console.log("After tens: " + number);
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
    console.log("Numerical balance should be zero. It is " + number);
    return number;
	}

	console.log("End of number to roman numeral conversion.");

	if (userInput < 10000) {
		return roman_numeral;
	}

}

var numberInput = document.querySelector('#the-number');
var solutionButton = document.querySelector('.submit-response');
var solutionDiv = document.querySelector('.display-roman-numeral');


solutionButton.addEventListener('click', () => {
  var output = "";

  try {
    output = numberToRomanNumeral(numberInput.value);
  }
  catch (err) {
    output = "WARNING: " + err;
  }

  solutionDiv.textContent = output;
});
