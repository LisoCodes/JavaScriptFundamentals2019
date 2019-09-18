//set myName variable to your name;
function myName(name) {
  let myName = name;

  return myName;
}

function setTeachersNames(teachersName) {
  // change code below this line so that we can set the variable.

  //const teachers = null;
  //teachers = teachersName; //  <- this is  invalid because teachers is a const. How can we fix this?
  const teachers = teachersName;

  return teachers;
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum;

  sum = a+b;
  
  return sum;
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  age++;
  return age;
}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  age--;
  return age;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  let int;
  int = parseInt(str, 10);
  return int;
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  let characterPosition;

  characterPosition = name.indexOf(letter);
  
  return characterPosition;
}

/** Take the argument and return the length of the argument */

function stringLength(str) {
  let strLength;

  strLength = str.length;

  return strLength;
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  let lastCharacter;

  lastCharacter = str.charAt((stringLength(str))-1);

  return lastCharacter;
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  let newPlace;

  let words;
  let lastWordPos;

  words = place.split(" ");
  lastWordPos = (words.length)-1;
  newPlace = words[lastWordPos];
  
  return newPlace;
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber;

  //let equal;
  
  if (arg1 > arg2) {
  	largestNummber = arg1;
  } /*else if(arg2 > arg1) {
  	largestNumber = arg2;
  }*/ else {
  	//lasgestNumber = null;
  	//equal = "The numbers are equal"
  	largestNumber = arg2;
  }

  /*if (largestNumber == null) {
  	return equal;
  } else {
  	return largestNumber;
  }*/
  
  return largestNumber;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being married.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
  let newFullName;

  let words;
  let name;

  words = fullName.split(" ");
  name = words[0];

  newFullName = name.concat(" ",newLastName);

  return newFullName;
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(fullName) {
  let capitalizeLastName;

  let lastName;

  lastName = getLastWordInPlaceName(fullName);
  capitalizeLastName = replaceLastName(fullName, (lastName[0].toUpperCase()+lastName.slice(1)));  

  return capitalizeLastName;
}

/***
 * Change below so that it will also compare data types
 *
 *
 */
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return 'Equal';
  }
  return 'Not Equal';
}

/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 * ```javascript
 * testStrictNotEqual(17, 17) // should return "Equal"
 * testStrictNotEqual("17", 17) // should return "Not Equal"
 * testStrictNotEqual(12, "bob") // should return "Not Equal"
 * ```
 *
 */

function testStrictNotEqual(a, b) {
  // Only Change Code Below this Line
  if (a !== b) {
    // Only Change Code Above this Line

    return 'Not Equal';
  }
  return 'Equal';
}

/***
 *  Refactor the code down below to use the logical && operator.
 *  The should return "Yes" when it is 6, 7, 8 and 9.
 *  ```javascript
 *  testLogicalAnd(9); // should return "Yes"
 *  testLogicalAnd(6); // should return "Yes"
 *  testLogicalAnd(10); // should return "No"
 *  testLogicalAnd(5); // should return "No"
 *  ```
 *  You must use the && operator to complete the problem.
 */

function testLogicalAnd(num) {
  // code here
  if(num > 5 && num < 10) {
  	return 'Yes';
  } else {
  	return 'No';
  }
}

/**
 * Refactor the code down below to use the logical || operator
 * ```javascript
 * testLogicalOr(0) // should return No
 * testLogicalOr(20) // should return Yes
 * testLogicalOr(25) // should return Yes
 * ````
 */

function testLogicalOr(num) {
  // code here
  if(num == 20 || num == 25) {
  	return 'Yes';
  } else {
  	return 'No';
  }
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  if (isEven % 2 == 0) {
  	return true;
  } else {
  	return false;
  }
  //return isEven;
}

/****
 *  You are given a variable num:
 *  Your task is to print:
- ONE, if num is equal to  1.
- TWO, if num is equal to  2.
- THREE,if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num is equal to 5.
- SIX,  if num is equal to 6.
- SEVEN,if num is equal to 7.
- EIGHT,if num is equal to 8.
- NINE, if num is equal to 9.
 * 
 * PLEASE TRY AGAIN, if  is none of the above
 * 
 *  *****/

function caseInSwitch(num) {
	let words = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','PLEASE TRY AGAIN'];
	if(num > 0 && num < 10) {
		return words[num-1];
	}else {
		return words[9];
	}
}


/***
 *  Create a function named timesFive
 *  should multiply the argument by 5
 *  timesFive(5)should return 25
 *  timesFive(2)should return 10
 *  timesFive(0)should return 0
 *
 *  if there is no arguments supplied to the function it should return 5
 *   timesFive() should return 5
 *
 */
function timesFive(num){
	let result;
	if(num == null){
		num = 1;
	}
	result = num * 5;
	return result;
}


/***
 *  create a function called lowerCaseName that will return the string lowerCased
 *   create two if statements. The first if statement will check for null or undefined and exit out of
 *   the function early.
 *   the second if statement will return the argument in lowercase format
 *     i.e Hamburger --> hamburger
 *
 *
 *
 *
 */

// Write a function here
function lowerCaseName(name){
	if(name == null){
		return;
	}
	if(typeof name === 'string') {
		return name.toLowerCase();
	}
}

/******************************************************************************************************************/
/** Ignore below. It's for the tests. **/

let myExports = {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  isEvenOrOdd,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  compareEquality,
  replaceLastName,
  capitalizeLastName,
  testStrictNotEqual,
  testLogicalAnd,
  testLogicalOr,
  caseInSwitch,
  timesFive: () => {},
  lowerCaseName: () => {}
};
try {
  //eslint-disable-next-line no-undef
  if (timesFive) myExports.timesFive = timesFive;
  // eslint-disable-next-line no-undef
} catch (e) {}

try {
  //eslint-disable-next-line no-undef

  // eslint-disable-next-line no-undef
  if (lowerCaseName) {
    myExports.lowerCaseName = lowerCaseName;
  }
} catch (e) {}

module.exports = myExports;