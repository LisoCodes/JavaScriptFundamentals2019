const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  isEvenOrOdd,
  functionMaker,
  confirmEnding
} = require("../../challenges/9-30-challenges");

describe("9-30-challenges", () => {
  it("if the number is odd, return the word Odd. If the number is even return the word even", () => {
    expect(isEvenOrOdd(5)).to.equal("Odd");
    // expect(isEvenOrOdd(2)).to.equal("Even");
  });

  it('function Maker returns a new function. The returned function when invoked should say "Second Function"', () => {
    expect(functionMaker()()).to.equal("Second Function");
  });

  it("Check if a string (first argument, str) ends with the given target string (second argument, target).", () => {
    expect(confirmEnding("James", "s")).to.equal(true);
    expect(confirmEnding("Mike", "s")).to.equal(false);
    expect(confirmEnding("rick", "f")).to.equal(false);
    expect(confirmEnding("andrea", "a")).to.equal(true);
    expect(confirmEnding("Clifford", "ord")).to.equal(true);
  });
});
