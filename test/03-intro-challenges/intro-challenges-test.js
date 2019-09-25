const { expect } = require("chai");
const {
  countNumberOfDigits,
  getRelativeTime,
  roundToNearestHundredth
} = require("../../exercises/03-intro-challenges/intro-challenges");

describe("countNumberOfDigits", () => {
  it("should return the number of digits in an integer", () => {
    expect(countNumberOfDigits(1)).to.equal(1);
    expect(countNumberOfDigits(123)).to.equal(3);
    expect(countNumberOfDigits(1000)).to.equal(4);
  });
});

describe("getRelativeTime", () => {
  it('should return "seconds ago" when the number of seconds are less than a minute', () => {
    expect(getRelativeTime(59)).to.equal("seconds ago");
  });
  it('should return "minutes ago" when the number of seconds are less than an hour', () => {
    expect(getRelativeTime(60)).to.equal("minutes ago");
    expect(getRelativeTime(3599)).to.equal("minutes ago");
  });
  it('should return "hours ago" when the number of seconds are less than a day', () => {
    expect(getRelativeTime(3600)).to.equal("hours ago");
    expect(getRelativeTime(86399)).to.equal("hours ago");
  });
  it('should return "days ago" when the number of seconds are equal to or greater than a day', () => {
    expect(getRelativeTime(86400)).to.equal("days ago");
    expect(getRelativeTime(604800)).to.equal("days ago");
  });
});

describe("roundToNearestHundredth", () => {
  it("should round to the nearest 100th decimal point", () => {
    expect(roundToNearestHundredth(14.511)).to.equal(14.51);
    expect(roundToNearestHundredth(14.499)).to.equal(14.5);
  });
});
