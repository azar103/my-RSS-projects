const assert = require("assert");
const { sumOfOther } = require("../sumOfOther");

describe("testing sumOfOther function", () => {
  it("Test 1", () => {
    assert.strictEqual(
      sumOfOther([2, 3, 4, 1]).join(""),
      [8, 7, 6, 9].join("")
    );
  });
  it("Test 2", () => {
    assert.strictEqual(
      sumOfOther([4, 6, 4, 1, 0, 5]).join(""),
      [16, 14, 16, 19, 20, 15].join("")
    );
  });
  it("Test 3", () => {
    assert.strictEqual(sumOfOther([]).join(""), [].join(""));
  });
  it("Test 4", () => {
    assert.strictEqual(sumOfOther([0]).join(""), [0].join(""));
  });
  it("Test 5", () => {
    assert.throws(() => sumOfOther(1), Error, "Invalid value");
  });
  it("Test 6", () => {
    assert.throws(() => sumOfOther("1, 2, 3"), Error, "Invalid value");
  });
  it("Test 7", () => {
    assert.throws(() => sumOfOther(undefined), Error, "Invalid value");
  });
  it("Test 8", () => {
    assert.throws(
      () => sumOfOther({ 1: 1, 2: 2, 3: 3 }),
      Error,
      "Invalid value"
    );
  });
});
