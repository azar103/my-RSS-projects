const assert = require("assert");
const { make } = require("../make");

describe("testing make function", () => {
  function sum(a, b) {
    return a + b;
  }
  it("Test 1", () => {
    assert.strictEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it("Test 2", () => {
    assert.strictEqual(make(sum), 0);
  });
  it("Test 3", () => {
    assert.strictEqual(make(15, 10, 3)(34, 21, 666)(41, 10)(sum), 800);
  });
  it("Test 4", () => {
    assert.strictEqual(typeof make(15)(34, 21, 666)(41), "function");
  });
});
