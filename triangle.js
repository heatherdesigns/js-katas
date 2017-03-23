// triangle kata: https://web.archive.org/web/20140119031248/http://onestepback.org/vital_testing/
// March 20, 2016

/* set up triangle
var side1 = 0;
var side2 = 0;
var side3 = 0;
*/

// Next step: Create test functions that will hold the if statements.

// validate sides
console.log("\nRunning a test to verify that each side is greater than zero: ");
function testSides(side1, side2, side3) {
  var result = false;
  if (side1 > 0 && side2 > 0 && side3 > 0){
    result = true;
  }
  return result;
}

var side1 = 2; var side2 = 4; var side3 = 6;  // pass
 if (testSides(side1, side2, side3) == true) {
   console.log("Sides " + side1 + ", " + side2 + " and " + side3 + " will make a triangle.");
 }
 else {
   console.log("Sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a triangle.");
 }

 var side1 = 0; var side2 = 3; var side3 = 5;  // fail
  if (testSides(side1, side2, side3) == true) {
    console.log("Sides " + side1 + ", " + side2 + " and " + side3 + " will make a triangle.");
  }
  else {
    console.log("Sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a triangle.");
  }

// validate sum
console.log("\nRunning a test to verify that the sum of all three sides will result in a triangle: ");
function testSum(side1, side2, side3) {
  var result = false;
  if ((side1 + side2 >= side3) && (side2 + side3 >= side1) && (side3 + side1 >= side2)){
  	result = true;
  }
  return result;
}

var side1 = 2; var side2 = 4; var side3 = 6;  // pass
 if (testSum(side1, side2, side3) == true) {
   console.log("The sum of sides " + side1 + ", " + side2 + " and " + side3 + " will make a triangle.");
 }
 else {
   console.log("The sum of sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a triangle.");
 }

 var side1 = 0; var side2 = 3; var side3 = 5;  // fail
  if (testSum(side1, side2, side3) == true) {
    console.log("The sum of sides " + side1 + ", " + side2 + " and " + side3 + " will make a triangle.");
  }
  else {
    console.log("The sum of sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a triangle.");
  }

// return isoceles? (2 sides are equal)
console.log("\nRunning test to see if the triangle is isosceles: ");
function isIsosceles(side1, side2, side3) {
  var result = false;
  if (side1 == side2 || side2 == side3 || side1 == side3){
  	result = true;
  }
  return result;
}

var side1 = 4; var side2 = 4; var side3 = 6;  // pass
 if (isIsosceles(side1, side2, side3) == true) {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make an isosceles triangle.");
 }
 else {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make an isosceles triangle.");
 }

 var side1 = 3; var side2 = 5; var side3 = 6;  // fail
  if (isIsosceles(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make an isosceles triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make an isosceles triangle.");
  }

// return equilateral? (all sides are equal)
console.log("\nRunning test to see if the triangle is equilateral: ");
function isEquilateral(side1, side2, side3) {
  if (side1 == side2 && side2 == side3){
  	return true;
  }
}

var side1 = 4; var side2 = 4; var side3 = 4;  // pass
 if (isEquilateral(side1, side2, side3) == true) {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make an isosceles triangle.");
 }
 else {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make an isosceles triangle.");
 }

 var side1 = 3; var side2 = 5; var side3 = 6;  // fail
  if (isEquilateral(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make an equilateral triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make an equilateral triangle.");
  }

// return scalene? (all sides are different)
console.log("\nRunning test to see if the triangle is scalene: ");
function isScalene(side1, side2, side3) {
  if (side1 != side2 && side2 != side3 && side1 != side3){
  	return true;
  }
}

var side1 = 2; var side2 = 4; var side3 = 6;  // pass
 if (isScalene(side1, side2, side3) == true) {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make a scalene triangle.");
 }
 else {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a scalene triangle.");
 }

 var side1 = 3; var side2 = 3; var side3 = 6;  // fail
  if (isScalene(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make a scalene triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a scalene triangle.");
  }

// return right angle?
console.log("\nRunning test to see if the triangle has a right angle: ");
function isRightAngle(side1, side2, side3) {
  if (side1*side1 + side2*side2 == side3*side3 ||
  	  side2*side2 + side3*side3 == side1*side1 ||
  	  side1*side1 + side3*side3 == side2*side2){
  	  	return true;
  	  }
}

var side1 = 3; var side2 = 4; var side3 = 5;  // pass
 if (isRightAngle(side1, side2, side3) == true) {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make a right angle triangle.");
 }
 else {
   console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a right angle triangle.");
 }

 var side1 = 3; var side2 = 3; var side3 = 6;  // fail
  if (isRightAngle(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make a right angle triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a right angle triangle.");
  }


// tell me all the things!!
function triangleDriver(side1, side2, side3) {
  console.log("\nThe results of " + side1 + ", " + side2 + " and " + side3 + " are: ");
  if (testSides(side1, side2, side3) != true) {
    console.log("One of the sides is equal to or less than zero.");
    console.log("This IS NOT a triangle.");
  }
  else if(testSum(side1, side2, side3) != true) {
    console.log("The sum of all sides DO NOT make a trinagle.");
  }
  else if(isEquilateral(side1, side2, side3) == true) {
    console.log("This is an equilateral triangle.");
  }
  else if(isIsosceles(side1, side2, side3) == true) {
    console.log("This is an isosceles triangle.");
  }
  else if(isScalene(side1, side2, side3) == true) {
    console.log("This is a scalene triangle.");
  }
  else if(isRightAngle(side1, side2, side3) == true) {
    console.log("This is also a right angle triangle.");
  }
  else{
    
  }
}

// let's go!!
triangleDriver(1, 2, 3);
triangleDriver(2, 2, 4);
triangleDriver(5, 5, 5);
triangleDriver(5, 12, 13);
triangleDriver(0, 2, 5); // fail
triangleDriver(3, 33, 333); // fail
