const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const {
  objectMaker,
  groceryList,
  printNames,
  multiplier,
  map,
  doubleValues,
  filter,
  deleteUser,
  extractKey,
  find,
  findUser,
  addItems,
  generateTally,
  flattenArray,
  arrayToObject,
  calculator,
  guessingGame
} = require("../../exercises/06-A-Closer-Look-At-Functions/06-A-Closer-Look-At-Functions");

describe("Functions", () => {
  it("should return an object with a name as the `key` and value a name ", () => {
    const obj = objectMaker();
    expect(Object.keys(obj)[0]).to.equal("name");
  });

  it("should return a list of items when calling on get getList is called", () => {
    const groceryListObj = groceryList();
    groceryListObj.add("pears");
    expect(groceryListObj.getGroceryList().length).to.equal(1);
  });
});

describe("groceryList", () => {
  it("should add an item to the grocery list when the method add is called", () => {
    const groceryListObj = groceryList();
    groceryListObj.add("pears");
    groceryListObj.add("orange");
    groceryListObj.add("apples");
    expect(groceryListObj.getGroceryList().length).to.equal(3);
  });

  it("should remove the correct item based off of the argument given when method remove is called", () => {
    const groceryListObj = groceryList();
    groceryListObj.add("pears");
    groceryListObj.add("orange");
    groceryListObj.add("apples");
    groceryListObj.removeItem(2);
    console.log(groceryListObj.getGroceryList());
    expect(groceryListObj.getGroceryList().length).to.equal(2);
  });
});

describe("Closures", () => {
  describe("calculator", () => {
    it("should return an object with two functions", () => {
      const calcObj = calculator();
      expect(calcObj).to.be.an("object");

      const methods = Object.values(calcObj);
      expect(methods).to.have.lengthOf(2);

      expect(methods[0]).to.be.a("function");
      expect(methods[1]).to.be.a("function");
    });
    it('the second method ("getter") should return the value of sum. ("sum" needs to be "falsy" at first for this to pass).', () => {
      const calcObj = calculator();
      const methods = Object.values(calcObj);
      const sum = methods[1]();
      expect(sum).to.not.be.ok;
    });
    it('the first method ("setter") should set the value of sum', () => {
      const calcObj = calculator();
      const methods = Object.values(calcObj);
      const [add, get] = methods;

      add(5);
      const sum1 = get();
      expect(sum1).to.equal(5);

      add(13);
      const sum2 = get();
      expect(sum2).to.equal(18);

      add(0);
      const sum3 = get();
      expect(sum3).to.equal(18);

      add(-20);
      const sum4 = get();
      expect(sum4).to.equal(-2);
    });
  });

  describe("guessingGame", () => {
    it("should return a function", () => {
      const round = guessingGame(3);
      expect(round).to.be.a("function");
    });
    it('should return "You\'re too low!" if your guess is too low', () => {
      const round = guessingGame(5);
      const feedback = round(-Infinity);
      expect(feedback).to.equal("You're too low!");
    });
    it('should return "You\'re too high!" if your guess is too high', () => {
      const round = guessingGame(5);
      const feedback = round(Infinity);
      expect(feedback).to.equal("You're too high!");
    });
    it(
      'should return "You got it!" if your guess is the same as the random number. (Skipping because we cannot test this).'
    );
    it('should return "No more guesses the answer was x", where x is the answer, if you guess more than what is allowed', () => {
      const round = guessingGame(1);
      round(-Infinity);
      const feedback = round(Infinity);
      expect(feedback).to.include("No more guesses. The answer was ");
    });
    it("should have an answer that is an integer", () => {
      const round = guessingGame(1);
      round(-Infinity);
      const feedback = round(Infinity);
      const isFloat = feedback.match(/\d(?=\.\d)/);
      expect(isFloat).to.be.null;
    });
  });
});

describe("Currying", () => {
  describe("multiplier", () => {
    it("should multiply at once if passed two numbers as agruments", () => {
      const result = multiplier(3, 4);
      expect(result).be.equal(12);
    });
    it("should return a function if only passed once argument", () => {
      const result = multiplier(3);
      expect(result).to.be.a("function");
    });
    it("should multiply the two numbers if passed in a parameters in a separate set of parentheses (e.g. multiplier(3)(4))", () => {
      const result = multiplier(3)(4);
      expect(result).be.equal(12);
    });
  });
});

describe("Callbacks", () => {
  it("the callback is called for each item in the array", () => {
    const callback = sinon.spy();
    printNames(["test", "test1", "test3"], callback);
    expect(callback.calledThrice).to.equal(true);
  });
});

describe("map", () => {
  it("tests map to see if the function returns an array of modified values", () => {
    let suppliedArr;
    let arrIndex = [];
    const tripledValues = map([1, 2, 3], (number, index, array) => {
      arrIndex.push(index);
      suppliedArr = array;
      return number * 3;
    });
    expect(tripledValues).to.be.equalTo([3, 6, 9]);
    expect(arrIndex).to.be.equalTo([0, 1, 2]);
    expect(suppliedArr).to.be.equalTo([1, 2, 3]);
  });
  it("tests doubledValues to see if the function returns an array that doubling every value in the array", () => {
    const doubledValues = doubleValues([2, 3, 4], number => {
      return number * 2;
    });
    expect(doubledValues).to.be.equalTo([4, 6, 8]);
  });
  it("tests extractedName to see if the function returns a new array with the value of a given key in each object", () => {
    const extractedName = extractKey(
      [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
      "name"
    );
    expect(extractedName).to.be.equalTo(["Elie", "Tim", "Matt", "Colt"]);
  });
});

describe("filter", () => {
  it("tests filter will remove values that meet a given condition", () => {
    let idx = 0;
    const originalArray = [4, 18, 50, 33];
    const notDivisibleByTen = filter(originalArray, (number, index, array) => {
      expect(index).to.equal(idx);
      expect(array).to.be.equalTo(originalArray);
      idx += 1;
      return number % 10 !== 0;
    });
    expect(notDivisibleByTen).to.equalTo([4, 18, 33]);
  });
  it("should remove the user object with the matching id", () => {
    const users = [
      {
        id: 1024,
        username: "smile134",
        email: "smile134@example.com"
      },
      {
        id: 1025,
        username: "newyorkfarmer",
        email: "johndoe@example.com"
      },
      {
        id: 1026,
        username: "redsocksfan#1",
        email: "massusa@example.com"
      }
    ];
    const user = deleteUser(users, 1025);
    expect(user).to.deep.equal([
      {
        id: 1024,
        username: "smile134",
        email: "smile134@example.com"
      },
      {
        id: 1026,
        username: "redsocksfan#1",
        email: "massusa@example.com"
      }
    ]);
  });
});

describe("find", () => {
  it("tests find to see if it returns a single value", () => {
    let idx = 0;
    const originalArray = [4, 18, 50, 33];
    const divisibleByTen = find(originalArray, (number, index, array) => {
      expect(index).to.equal(idx);
      expect(array).to.be.equalTo(originalArray);
      idx += 1;
      return number % 10 === 0;
    });
    expect(divisibleByTen).to.equal(50);
  });
  it("should return the user object with the matching id", () => {
    const users = [
      {
        id: 1024,
        username: "smile134",
        email: "smile134@example.com"
      },
      {
        id: 1025,
        username: "newyorkfarmer",
        email: "johndoe@example.com"
      },
      {
        id: 1026,
        username: "redsocksfan#1",
        email: "massusa@example.com"
      }
    ];
    const user = findUser(users, 1025);
    expect(user).to.deep.equal({
      id: 1025,
      username: "newyorkfarmer",
      email: "johndoe@example.com"
    });
  });
});

describe("testing the functionality  of Reduce", () => {
  it("addItems should add up all the numbers and return the total", () => {
    const total = addItems([1, 2, 3]);
    const negativeTotal = addItems([-10, 5, 5]);
    expect(total).to.equal(6);
    expect(negativeTotal).to.equal(0);
  });
  it("flattenArray should return a flattened array", () => {
    const flat = flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(flat).to.be.equalTo([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("generateTally should return a tally using the object data structure ", () => {
    const tally = generateTally([
      "es6",
      "es6",
      "es6",
      "es5",
      "react",
      "angular",
      "vue"
    ]);
    expect(tally).to.deep.equal({
      es6: 3,
      es5: 1,
      react: 1,
      angular: 1,
      vue: 1
    });
  });
  it("arrayToObject should transform and array of objects to accessible via id", () => {
    const peopleArray = [
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 },
      { id: 101, name: "tom", age: 23 },
      { id: 102, name: "tim", age: 23 }
    ];
    const peopleObject = {
      123: { id: 123, name: "dave", age: 23 },
      456: { id: 456, name: "chris", age: 23 },
      789: { id: 789, name: "bob", age: 23 },
      101: { id: 101, name: "tom", age: 23 },
      102: { id: 102, name: "tim", age: 23 }
    };
    const arrOfObj = arrayToObject(peopleArray);
    expect(arrOfObj).to.deep.equal(peopleObject);
  });
});
