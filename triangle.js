// triangle kata: https://web.archive.org/web/20140119031248/http://onestepback.org/vital_testing/
// March 23, 2016

/* set up triangle
var side1 = 0;
var side2 = 0;
var side3 = 0;
*/

// validate sides
function testSides(side1, side2, side3) {
  var result = false;
  if (side1 > 0 && side2 > 0 && side3 > 0){
    result = true;
  }
  return result;
}

// validate sum
function testSum(side1, side2, side3) {
  var result = false;
  if ((side1 + side2 >= side3) && (side2 + side3 >= side1) && (side3 + side1 >= side2)){
  	result = true;
  }
  return result;
}

// return isoceles? (2 sides are equal)
function isIsosceles(side1, side2, side3) {
  var result = false;
  if (side1 == side2 || side2 == side3 || side1 == side3){
  	result = true;
  }
  return result;
}

// return equilateral? (all sides are equal)
function isEquilateral(side1, side2, side3) {
  if (side1 == side2 && side2 == side3){
  	return true;
  }
}

// return scalene? (all sides are different)
function isScalene(side1, side2, side3) {
  if (side1 != side2 && side2 != side3 && side1 != side3){
  	return true;
  }
}

// return right angle?
function isRightAngle(side1, side2, side3) {
  if (side1*side1 + side2*side2 == side3*side3 ||
  	  side2*side2 + side3*side3 == side1*side1 ||
  	  side1*side1 + side3*side3 == side2*side2){
  	  	return true;
  	  }
}

// test all the things
function testDriver(side1, side2, side3){
  console.log("\nRunning a test to verify that each side is greater than zero: ");
  if (testSides(side1, side2, side3) == true) {
    console.log("Sides " + side1 + ", " + side2 + " and " + side3 + " will make a triangle.");
  }
  else {
    console.log("Sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a triangle.");
  }

  console.log("\nRunning a test to verify that the sum of all three sides will result in a triangle: ");
  if (testSum(side1, side2, side3) == true) {
    console.log("The sum of sides " + side1 + ", " + side2 + " and " + side3 + " will make a triangle.");
  }
  else {
    console.log("The sum of sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a triangle.");
  }

  console.log("\nRunning test to see if the triangle is isosceles: ");
  if (isIsosceles(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make an isosceles triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make an isosceles triangle.");
  }

  console.log("\nRunning test to see if the triangle is equilateral: ");
  if (isEquilateral(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make an equilateral triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make an equilateral triangle.");
  }

  console.log("\nRunning test to see if the triangle is scalene: ");
  if (isScalene(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make a scalene triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a scalene triangle.");
  }

  console.log("\nRunning test to see if the triangle has a right angle: ");
  if (isRightAngle(side1, side2, side3) == true) {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will make a right angle triangle.");
  }
  else {
    console.log("The sides " + side1 + ", " + side2 + " and " + side3 + " will NOT make a right angle triangle.");
  }
}

// tell me if all the things work correctly
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
// testDriver(1, 2, 3);
// testDriver(2, 2, 4);


triangleDriver(1, 2, 3);    // scalene
triangleDriver(2, 2, 4);    // isosceles
triangleDriver(5, 5, 5);    // equilateral
triangleDriver(5, 12, 13);  // right angle
triangleDriver(0, 2, 5);    // fail
triangleDriver(3, 33, 333); // fail
