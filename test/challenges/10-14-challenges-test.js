const { expect } = require("chai");

const {
  removeElement,
  truncateString
} = require("../../challenges/10-14-challenges/10-14-challenges");

describe("challenges/10-7-challenges/10-7-challenges.js", () => {
  it("should remove the first element from the array", () => {
    const arr = removeElement([1, 2, 3, 4]);
    expect(arr.length).to.equal(3);
  });

  it("Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ...endin", () => {
    expect(
      truncateString("A-tisket a-tasket A green and yellow basket", 8)
    ).to.equal("A-tisket...");

    expect(
      truncateString("Peter Piper picked a peck of pickled peppers", 11)
    ).to.equal("Peter Piper...");

    expect(truncateString("A-", 1)).to.equal("A...");
  });
});
