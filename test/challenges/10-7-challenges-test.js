const { expect } = require("chai");

const path = require("path");
const fs = require("fs");

const people = require("../../challenges/10-7-challenges/people.json");

const {
  createCsvString,
  createGraduateObject
} = require("../../challenges/10-7-challenges/10-7-challenges");

describe("challenges/10-7-challenges/10-7-challenges.js", () => {
  it("should return a student graduate object with the correct format", () => {
    const graduateObject = createGraduateObject(
      "Jane Doe",
      2019,
      { 1: "JavaScript", 2: "HTML", 3: "CSS" },
      ["https://github.com/example/profile", "https://linkedin.com/profile"]
    );

    expect(graduateObject).to.eql({
      name: "Jane Doe",
      graduationYear: 2019,
      skills: ["JavaScript", "HTML", "CSS"],
      links: {
        github: "https://github.com/example/profile",
        linkedIn: "https://linkedin.com/profile"
      }
    });
  });
  it("testing createCsvString", function(done) {
    const result = createCsvString(people);
    expect(result).to.equal(
      '"Name","Gender","Location","DOB"\n"Georgia Wagner","female","Skookumchuck, VA","1977-02-26"\n"Meredith Holt","female","Coltman, WV","1957-09-22"\n"Cora Bradley","female","Fairland, GA","1995-07-19"\n"Carol Scott","female","Two Brooks, WI","1973-08-17"\n"Vincent Silva","male","Brookhaven, DC","1959-07-30"\n"Clifton Armstrong","male","Cimarron, WA","1971-10-08"\n"Deanna Stanley","female","Morgan Mill, OK","1971-04-20"\n"Sidney Walker","male","Scottsville, KS","1987-01-05"\n"Guillermo Gross","male","Del Rey Oaks, RI","1998-05-31"\n"Daniel Steele","male","Martins Corner, TX","1963-07-09"\n"Brett Jimenez","male","East Waterford, ME","1958-05-06"\n'
    );

    let outputPath;
    try {
      outputPath = path.join(
        __dirname,
        "../../challenges/10-7-challenges/people-output.csv"
      );
      // The line here is writing your string to a CSV file
      fs.writeFile(outputPath, result, err => {
        if (err) throw err;
        console.log("Wrote file to:\n", outputPath);
        console.log(
          "Try opening it in Excel, Number or another spreadsheet program."
        );
        done();
      });
    } catch (e) {
      console.log("Could not write CSV file :(");
      done();
    }
  });
});
