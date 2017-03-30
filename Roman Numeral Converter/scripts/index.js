function numberToRomanNumeral(userInput){

  const ORIG_NUMBER = userInput;
	let numerical_balance = userInput;
	let roman_numeral = "";

  if (isOutsideRange(ORIG_NUMBER) || isAstring(ORIG_NUMBER)) {
    throw ORIG_NUMBER + " is an unacceptable answer. Please enter a number between 1 and 9999.";
  }

// I'm not sure I like the names of these variables. They seem confusing. Think about it & consider other names.
let balance_after_thousands = findThousands();
let balance_after_hundreds = findHundreds();
let balance_after_tens = findTens();
findOnes();

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
        console.log(userInput.charAt(0) + " This isn't a number!");   // to make sure I'm catching the letters.
        return true;
      }
    }
    return false;
  }

	function findThousands(){
    while (numerical_balance >= 1000 && numerical_balance < 10000) {
			roman_numeral += "M";
			numerical_balance -= 1000;
      console.log("After thousands: " + numerical_balance);
		}
    return numerical_balance;
	}

	function findHundreds(){
		while (balance_after_thousands < 1000 && balance_after_thousands >= 100) {
			if (balance_after_thousands >= 900) {
				roman_numeral += "CM";
				balance_after_thousands -= 900;
			}

			else if (balance_after_thousands >= 500) {
				roman_numeral += "D";
				balance_after_thousands -= 500;
			}

			else if (balance_after_thousands >= 400) {
				roman_numeral += "CD";
				balance_after_thousands -= 400;
			}

			else if ((balance_after_thousands < 900 && balance_after_thousands > 500) || (balance_after_thousands < 400 && balance_after_thousands >= 100)){
				roman_numeral += "C";
				balance_after_thousands -= 100;
			}
		}
    numerical_balance = balance_after_thousands;
    console.log("After hundreds: " + numerical_balance);
    return numerical_balance;
	}

	function findTens() {
		while (balance_after_hundreds < 100 && balance_after_hundreds >= 10){
			if (balance_after_hundreds >= 90) {
				roman_numeral += "XC";
				balance_after_hundreds -= 90;
			}

			else if (balance_after_hundreds >= 50) {
				roman_numeral += "L";
				balance_after_hundreds -= 50;
			}

			else if (balance_after_hundreds >= 40) {
				roman_numeral += "XL";
				balance_after_hundreds -= 40;
			}

			else if ((balance_after_hundreds < 90 && balance_after_hundreds > 50) || (balance_after_hundreds < 40 && balance_after_hundreds >= 10)) {
				roman_numeral += "X";
				balance_after_hundreds -= 10;
			}
		}
    numerical_balance = balance_after_hundreds;
    console.log("After tens: " + numerical_balance);
    return numerical_balance;
	}

	function findOnes() {
		while (balance_after_tens < 10 && balance_after_tens >= 1) {
			if (balance_after_tens >= 9) {
				roman_numeral += "IX";
				balance_after_tens -= 9;
			}

			else if (balance_after_tens >= 5) {
				roman_numeral += "V";
				balance_after_tens -= 5;
			}

			else if (balance_after_tens >= 4) {
				roman_numeral += "IV";
				balance_after_tens -= 4;
			}

			else if ((balance_after_tens < 9 && balance_after_tens > 5) || (balance_after_tens < 4 && balance_after_tens >= 1)) {
				roman_numeral += "I";
				balance_after_tens -= 1;
			}
		}
    numerical_balance = balance_after_tens;
    console.log("Numerical balance should be zero. It is " + numerical_balance);
    return numerical_balance;
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
