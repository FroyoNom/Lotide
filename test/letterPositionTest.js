const _ = require("../src/index");
const assert = require("chai").assert;

describe("LetterPositionTest", () => {
  it("should return an object with the positions of each letter in a string while skipping spaces", () => {
    assert.deepEqual(_.letterPosition("lighthouse in the house"), {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    }
    );
  });
});