const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));
const {
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
  timesFive,
  lowerCaseName
} = require("../../exercises/02-intro-variable-numbers/intro-variables-numbers");

describe("Intro Variables And Numbers", () => {
  it("should return the students name", () => {
    const name = myName("Jamal");
    expect(name).equal("Jamal");
  });

  it("should return  both names of the teachers that are teaching the class", () => {
    const teachersName = setTeachersNames("Jamal Taylor Matina Patsos");
    expect(teachersName).equal("Jamal Taylor Matina Patsos");
  });

  it("correctly adds both arguments and returns the sum", () => {
    const sum = add(5, 5);
    expect(sum).to.equal(10);
  });

  it("should use the Javascript increment operator to increment the year by a 1", () => {
    expect(ageMeByAYear.toString().includes("++")).equal(true);
    expect(ageMeByAYear(2019)).equal(2020);
  });

  it("should use the Javascript decrement operator to decement the age by a 1", () => {
    expect(makeMeYoungerByAYear.toString().includes("--")).equal(true);
    expect(makeMeYoungerByAYear(18)).equal(17);
  });

  it("should cast the string to an integer", () => {
    expect(convertStringToInt("5")).equal(5);
  });

  it("should return the index position of the word", () => {
    expect(getTheCharacterPosition("James", "a")).equal(1);
  });

  it("should return the length of the string", () => {
    expect(stringLength("Javascript")).equal(10);
  });

  it("should return the last letter of the string", () => {
    expect(getLastCharacter("Marvel")).equal("l");
  });

  it("should return the second word of a two word place", () => {
    expect(getLastWordInPlaceName("Los Angeles")).equal("Angeles");
  });

  it("should return the largest number by comparing both arguments given to the function", () => {
    expect(getLargerNumber(5, 10)).equal(10);
  });

  it("should replace the last name of the full name with the new last name", () => {
    expect(replaceLastName("Gordon Ramsey", "Smith")).equal("Gordon Smith");
  });

  it("should capitalize the last name", () => {
    expect(capitalizeLastName("Jane doe")).equal("Jane Doe");
  });

  it("should compare the Equality of both arguments and return equal if both arguments are equal and if both arguments are not equal return not equal", () => {
    expect(compareEquality(5, "5")).equal("Not Equal");
    expect(compareEquality("5", "5")).equal("Equal");
    expect(compareEquality(5, 5)).equal("Equal");
  });

  it("should use  strict inequality operator and return the correct responses", () => {
    expect(testStrictNotEqual(17, 17)).to.equal("Equal"); // should return "Equal"
    expect(testStrictNotEqual("17", 17)).to.equal("Not Equal"); // should return "Not Equal"
    expect(testStrictNotEqual(12, "bob")).to.equal("Not Equal"); // should return "Not Equal"
    expect(testStrictNotEqual.toString().includes("!==")).equal(true);
  });

  it("should use the logical And operator and return the correct responses", () => {
    expect(testLogicalAnd(9)).to.equal("Yes"); // should return "Yes"
    expect(testLogicalAnd(6)).to.equal("Yes"); // should return "Yes"
    expect(testLogicalAnd(10)).to.equal("No"); // should return "No"
    expect(testLogicalAnd(5)).to.equal("No"); // should return "No"
    expect(testLogicalAnd.toString()).includes("&&");
  });

  it("should use the logical Or operator and return the correct responses", () => {
    expect(testLogicalOr(0)).to.equal("No");
    expect(testLogicalOr(20)).to.equal("Yes");
    expect(testLogicalOr(25)).to.equal("Yes");
    expect(testLogicalOr.toString()).includes("||");
  });

  it("should return true if the number is an even number or false if the number is an odd number", () => {
    expect(isEvenOrOdd(2)).equal(true);
    expect(isEvenOrOdd(3)).equal(false);
  });

  it("should return print out the correct value when given a certain argument", () => {
    expect(caseInSwitch(1)).to.equal("ONE");
    expect(caseInSwitch(5)).to.equal("FIVE");
    expect(caseInSwitch(7)).to.equal("SEVEN");
    expect(caseInSwitch(50)).to.equal("PLEASE TRY AGAIN");
    expect(caseInSwitch(-1)).to.equal("PLEASE TRY AGAIN");
  });

  it("should multiply the argument by 5", () => {
    expect(timesFive(5)).to.equal(25);
    expect(timesFive(10)).to.equal(50);
    expect(timesFive(2)).to.equal(10);
    expect(timesFive()).to.equal(5);
  });

  it("should check for null or undefined and if the argument is present will return the argument with it being lowercase", () => {
    const goodFn = () => lowerCaseName(null);
    expect(goodFn).to.not.throw();
    expect(lowerCaseName("Samuel")).to.equal("samuel");
    expect(lowerCaseName(null)).to.equal(undefined);
    expect(lowerCaseName(undefined)).to.equal(undefined);
  });
});
