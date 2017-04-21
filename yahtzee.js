// Yahtzee Kata: http://codingdojo.org/kata/Yahtzee/

function roll5() {
  let rollOf5Dice = [];
  for (let count = 0; count < 5; count++) {
    rollOf5Dice.push(rollDie());
  }
  return rollOf5Dice.sort();
}

function roll4() {
  let rollOf4Dice = [];
  for (let count = 0; count < 4; count++) {
    rollOf4Dice.push(rollDie());
  }
  return rollOf4Dice.sort();
}

function roll3() {
  let rollOf3Dice = [];
  for (let count = 0; count < 3; count++) {
    rollOf3Dice.push(rollDie());
  }
  return rollOf3Dice.sort();
}

function roll2() {
  let rollOf2Dice = [];
  for (let count = 0; count < 2; count++) {
    rollOf2Dice.push(rollDie());
  }
  return rollOf6Dice.sort();
}

function rollDie() {
  let die = Math.floor(Math.random() * 6 ) + 1;
  return die;
}

// Validate for an array of random numbers between 1 and 6
function validateArraysOfRollingDice() {

  let fiveDice = roll5();
  console.log(fiveDice);

  // test length of array
  if (fiveDice.length != 5) {
    console.log("FAIL: You did not create an array of 5 die rolls.");
  }

  // test aray of numbers
  let count = 0;
  for (count; count < roll5().length; count++){
    console.log("Die " + (count + 1) + " is: " + fiveDice[count]);
    if (fiveDice[count] < 1 || fiveDice[count] > 6) {
      console.log("FAIL: Any number less than 1 and greater than 6 is unacceptable.");
      console.log(fiveDice[count] + " is not a valid die roll.");
    } // end if stmt
  } // end for loop
} // end validateArraysOfRollingDice

validateArraysOfRollingDice();
