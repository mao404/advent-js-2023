const getStaircasePaths = require("./main");

test("Test #01 - Returns an Array", () => {
  expect(Array.isArray(getStaircasePaths(4, 2))).toBe(true);
});

test("Test #02 - getStaircasePaths(4, 2)", () => {
  expect(getStaircasePaths(4, 2)).toStrictEqual([
    [1, 1, 1, 1],
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
    [2, 2],
  ]);
});

test("Test #03 - getStaircasePaths(0, 0)", () => {
  expect(getStaircasePaths(0, 0)).toStrictEqual([[]]);
});

test("Test #04 - getStaircasePaths(1, 1)", () => {
  expect(getStaircasePaths(1, 1)).toStrictEqual([[1]]);
});

test("Test #05 - getStaircasePaths(7, 3)", () => {
  expect(getStaircasePaths(7, 3)).toStrictEqual([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 2, 1],
    [1, 1, 1, 1, 3],
    [1, 1, 1, 2, 1, 1],
    [1, 1, 1, 2, 2],
    [1, 1, 1, 3, 1],
    [1, 1, 2, 1, 1, 1],
    [1, 1, 2, 1, 2],
    [1, 1, 2, 2, 1],
    [1, 1, 2, 3],
    [1, 1, 3, 1, 1],
    [1, 1, 3, 2],
    [1, 2, 1, 1, 1, 1],
    [1, 2, 1, 1, 2],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 3],
    [1, 2, 2, 1, 1],
    [1, 2, 2, 2],
    [1, 2, 3, 1],
    [1, 3, 1, 1, 1],
    [1, 3, 1, 2],
    [1, 3, 2, 1],
    [1, 3, 3],
    [2, 1, 1, 1, 1, 1],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 2, 1],
    [2, 1, 1, 3],
    [2, 1, 2, 1, 1],
    [2, 1, 2, 2],
    [2, 1, 3, 1],
    [2, 2, 1, 1, 1],
    [2, 2, 1, 2],
    [2, 2, 2, 1],
    [2, 2, 3],
    [2, 3, 1, 1],
    [2, 3, 2],
    [3, 1, 1, 1, 1],
    [3, 1, 1, 2],
    [3, 1, 2, 1],
    [3, 1, 3],
    [3, 2, 1, 1],
    [3, 2, 2],
    [3, 3, 1],
  ]);
});

test("Test #06 - getStaircasePaths(3, 3)", () => {
  expect(getStaircasePaths(3, 3)).toStrictEqual([
    [1, 1, 1],
    [1, 2],
    [2, 1],
    [3],
  ]);
});

test("Test #07 - getStaircasePaths(2, 1)", () => {
  expect(getStaircasePaths(2, 1)).toStrictEqual([[1, 1]]);
});

test("Test #08 - getStaircasePaths(5, 2)", () => {
  expect(getStaircasePaths(5, 2)).toStrictEqual([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 2, 1],
    [1, 2, 1, 1],
    [1, 2, 2],
    [2, 1, 1, 1],
    [2, 1, 2],
    [2, 2, 1],
  ]);
});
