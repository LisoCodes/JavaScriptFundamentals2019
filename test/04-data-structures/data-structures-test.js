const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  createAnArray,
  accessingAnArray,
  highestNumber,
  isPalindrome,
  createDogObject,
  createStudentObject,
  returnObjectProperties,
  combineArray,
  accessObject,
  combineObject,
  removeDuplicates,
  updateRecords,
  findAndAbort,
  addFunctionsIntoArray
} = require("../../exercises/04-data-structures/data-structures");

describe("Data structures", () => {
  it("should return an array with three values", () => {
    const newArr = createAnArray();
    expect(newArr.length).to.equal(4);
  });

  it("it should return a BMW", () => {
    const car = accessingAnArray();
    expect(car).to.equal("BMW");
  });

  it("should have two functions inside the array. The first function inside the array should add two arguments and the second function in the array should subtract both arguments", () => {
    const sum = addFunctionsIntoArray()[0](10, 10);
    expect(sum).to.equal(20);

    const difference = addFunctionsIntoArray()[1](50, 50);
    expect(difference).to.equal(0);
  });

  it("it should return the highest number in the array", () => {
    const number1 = highestNumber([1, 10, 2, 3, 4]);
    expect(number1).to.equal(10);
    const number2 = highestNumber([-1, -5, -4]);
    expect(number2).to.equal(-1);
  });

  it("it should merge both arrays", () => {
    const combinedArray = combineArray(["HTML"], ["CSS"]);
    expect(combinedArray).to.be.equalTo(["HTML", "CSS"]);
  });

  it("should return an object matching the given id and also break must be used", () => {
    const people = [
      {
        id: 10,
        firstName: "John",
        lastName: "Smith"
      },
      {
        id: 20,
        firstName: "Cookie",
        lastName: "Monster"
      },
      {
        id: 30,
        firstName: "Jane",
        lastName: "Doe"
      },
      {
        id: 40,
        firstName: "Tom",
        lastName: "Hardy"
      }
    ];

    expect(findAndAbort(people, 20)).to.deep.equal({
      id: 20,
      firstName: "Cookie",
      lastName: "Monster"
    });
    expect(findAndAbort.toString().includes("break")).to.equal(true);
  });

  it("should return true or false if the word is a palidrome", () => {
    const eyeResult = isPalindrome("eye");
    const notAPalindrome = isPalindrome("not a palindrome");
    const nope = isPalindrome("nope");

    expect(eyeResult).to.be.equal(true);
    expect(notAPalindrome).to.be.equal(false);
    expect(nope).be.equal(false);
  });

  it("should remove all duplicate values", () => {
    const unique = removeDuplicates([
      2,
      3,
      4,
      4,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      5,
      32,
      3,
      4,
      5
    ]);
    expect(unique).to.be.equalTo([2, 3, 4, 5, 6, 7, 32]);
  });

  it("it should return ballcap", () => {
    const obj = accessObject();
    expect(obj).to.equal("ballcap");
  });

  it("it should return an object that contains an array that has three values", () => {
    const student = createStudentObject();
    expect(student.firstName).to.be.a("string").to.be.ok;
    expect(student.lastName).to.be.a("string").to.be.ok;
    expect(student.skills.length).to.equal(3);
  });

  it("it should return a object", () => {
    const dog = createDogObject();

    expect(dog).to.be.an("object");
    expect(dog).to.have.all.keys("name", "legs", "tails", "owners");
    expect(dog.owners).to.be.an("array");
  });

  it("it should return all object properties", () => {
    const objectProperties = returnObjectProperties();
    expect(objectProperties.length).to.equal(4);
  });

  it("it should combine two objects and return a single object", () => {
    const obj1 = {
      firstName: "Clark"
    };
    const obj2 = {
      lastName: "Kent"
    };
    const combinedObj = combineObject(obj1, obj2);
    expect(combinedObj).to.deep.equal({
      firstName: "Clark",
      lastName: "Kent"
    });
  });

  /**
   * *  updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
   *  updateRecords(5439, "tracks", "Take a Chance on Me") tracks should have "Take a Chance on Me"as the last element.
   *  After updateRecords(2548, "artist", ""), artist should not be set
   *  After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love"as the last element
   *  After updateRecords(2468, "tracks", "Free"), tracks should have "1999"as the first element.
   *  After updateRecords(2548, "tracks", ""), tracks should not be set
   *  After updateRecords(1245, "album", "Riptide"), albums should be "Riptide"
   */

  describe("Data structures", () => {
    it('updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"', () => {
      let updatedRecord = updateRecords(5439, "artist", "ABBA");
      expect(updatedRecord["5439"]["artist"]).to.equal("ABBA");
    });

    it('updateRecords(5439, "tracks", "Take a Chance on Me") tracks should have "Take a Chance on Me"as the last element.', () => {
      let updatedRecord = updateRecords(5439, "tracks", "Take a Chance on Me");

      expect(updatedRecord["5439"]["tracks"][0]).to.equal(
        "Take a Chance on Me"
      );
    });

    it('After updateRecords(2548, "artist", ""), artist should not be set', () => {
      let updatedRecord = updateRecords(2548, "artist", "");
      expect(updatedRecord["2548"]["artist"]).to.equal(undefined);
    });

    it('After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love"as the last element', () => {
      let updatedRecord = updateRecords(1245, "tracks", "Addicted to Love");
      expect(updatedRecord[1245]["tracks"][0]).to.equal("Addicted to Love");
    });

    it('After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element.', () => {
      let updatedRecord = updateRecords(2468, "tracks", "Free");
      expect(updatedRecord[2468]["tracks"][0]).to.equal("1999");
    });

    it('After updateRecords(2548, "tracks", ""), tracks should not be set', () => {
      let updatedRecord = updateRecords(2548, "tracks", "");
      expect(updatedRecord[2548]["tracks"]).to.equal(undefined);
    });

    it('After updateRecords(1245, "album", "Riptide"), albums should be "Riptide"', () => {
      let updatedRecord = updateRecords(1245, "album", "Riptide");

      expect(updatedRecord[1245]["album"]).to.equal("Riptide");
    });
  });
});
