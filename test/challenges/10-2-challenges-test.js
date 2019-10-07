const chai = require("chai");
const expect = chai.expect;

const {
  createAnArray,
  uppercaseTargetWord
} = require("../../challenges/10-2-challenges");

describe("10-2-challenges", () => {
  it("The first item should be a 'string' the second item should be 'function', and the third item should be an array", () => {
    expect(createAnArray()[0]).be.string;
    expect(typeof createAnArray()[1] === "function").be.true;
    expect(Array.isArray(createAnArray()[2])).to.be.true;
  });

  it("The function should uppercase the target word", () => {
    expect(uppercaseTargetWord("first second third", 2)).to.equal(
      "first SECOND third"
    );
    expect(uppercaseTargetWord("white yellow red", 2)).to.equal(
      "white YELLOW red"
    );
    expect(uppercaseTargetWord("lunch dinner", 5)).to.equal(undefined);
  });
});
