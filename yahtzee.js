// Yahtzee Kata: http://codingdojo.org/kata/Yahtzee/

function rollDie() {
  let die = Math.floor(Math.random() * 6 ) + 1;
  return die;
}

function roll6() {
  let rollOf6Dice = [];
  for (let count = 0; count < 6; count++) {
    rollOf6Dice.push(rollDie());
  }
  return rollOf6Dice.sort();
}

console.log(roll6());
