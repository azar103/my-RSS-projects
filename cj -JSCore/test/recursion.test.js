const assert = require("assert");
const { recursion } = require("../recursion");

describe("testing recursion function", () => {
  const tree = {
    value: 100,
    left: { value: 90, left: { value: 70 }, right: { value: 99 } },
    right: { value: 120, left: { value: 110 }, right: { value: 130 } }
  };
  const firstResult = [[100], [90, 120], [70, 99, 110, 130]];

  const secondTree = {
    value: 100,
    left: {
      value: 90,
      left: {
        value: 70,
        left: { value: 50 },
        right: { value: 71 }
      },
      right: {
        value: 98,
        left: { value: 95 },
        right: { value: 99 }
      }
    },
    right: {
      value: 120,
      left: {
        value: 110,
        left: { value: 105 },
        right: { value: 115 }
      },
      right: {
        value: 130,
        left: { value: 125 },
        right: { value: 140 }
      }
    }
  };
  const secondResult = [
    [100],
    [90, 120],
    [70, 98, 110, 130],
    [50, 71, 95, 99, 105, 115, 125, 140]
  ];

  function converter(arr) {
    return arr.reduce((sum, elem) => `${sum}..${elem.join(",")}`, "");
  }

  it("Test 1", () => {
    assert.strictEqual(converter(recursion(tree)), converter(firstResult));
  });
  it("Test 2", () => {
    assert.strictEqual(
      converter(recursion(secondTree)),
      converter(secondResult)
    );
  });
  it("Test 3", () => {
    assert.throws(() => recursion([1, 2, 3]), Error, "Invalid value");
  });
  it("Test 4", () => {
    assert.throws(() => recursion(124), Error, "Invalid value");
  });
  it("Test 5", () => {
    assert.throws(() => recursion(undefined), Error, "Invalid value");
  });
});
