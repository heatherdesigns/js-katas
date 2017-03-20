// triangle kata: https://web.archive.org/web/20140119031248/http://onestepback.org/vital_testing/
// March 20, 2016

// set up triangle
let side1 = 0;
let side2 = 0;
let side3 = 0;

// validate sides
function testSides(side1, side2, side3){
  if (side1 < 0 || side2 < 0 || side3 < 0){
  	console.log("Each side must be greater than 0.");
  	console.log("This does not make a triangle.");
  }
  else {
  	console.log("Yay! These sides may possibly make a triangle.");
  }	
}

// validate sum
function testSum(side1, side2, side3){
  if ((side1 + side2 >= side3) || (side2 + side3 >= side1) || (side3 + side1 >= side2)){
  	console.log("Yay! The sum of the sides make a traingle!");
  }
  else {
    console.log("Sorry! The sides selected do not make a traingle. Goodbye!");
  }
} 

// return isoceles? (2 sides are equal)
function isIsoceles(side1, side2, side3){
  if(side1 == side2 || side2 == side3){
  	console.log("This is an isosceles triangle.");
  }  
  else {
  	console.log("This is NOT an isosceles triangle.");
  }
}

// return equilateral? (all sides are equal)
function isEquilateral(side1, side2, side3){
  if(side1 == side2 && side2 == side3){
  	console.log("This is an equilateral triangle.");
  }
  else {
  	console.log("This is NOT an equilateral traingle.");
  }
}

// return scalene? (all sides are different)
function isScalene(side1, side2, side3){
  if (side1 != side2 && side2 != side3 && side1 != side3){
  	console.log("This is a scalene traingle.");
  }
}

// return right angle?
function isRightAngle(side1, side2, side3){
  if (side1*side1 + side2*side2 == side3*side3 ||
  	  side2*side2 + side3*side3 == side1*side1 ||
  	  side1*side1 + side3*side3 == side2*side2){
  	  	console.log("This is a right angle triangle.");
  	  }
  	  else {
  	  	console.log("This is NOT a right angle triangle.");
  	  }
}

// tell me all the things!!
function triangleDriver(side1, side2, side3){
	console.log("\nThe results of " + side1 + ", " + side2 + " and " + side3 + " are: ");
	testSides(side1, side2, side3);
	testSum(side1, side2, side3);
	isIsoceles(side1, side2, side3);
	isEquilateral(side1, side2, side3);
	isScalene(side1, side2, side3);
	isRightAngle(side1, side2, side3);	
}

// let's go!!
triangleDriver(1, 2, 3);
triangleDriver(2, 2, 4);
triangleDriver(5, 5, 5);
triangleDriver(5, 12, 13);


