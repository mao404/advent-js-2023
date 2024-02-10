const findBalancedSegment = require("./main");

test("Test #01 - Returns an Array", () => {
  expect(Array.isArray(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))).toBe(
    true
  );
});

test("Test #02 - findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])", () => {
  expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toStrictEqual([2, 5]);
});

test("Test #03 - findBalancedSegment([1, 1, 0])", () => {
  expect(findBalancedSegment([1, 1, 0])).toStrictEqual([1, 2]);
});

test("Test #04 - findBalancedSegment([1, 1, 1])", () => {
  expect(findBalancedSegment([1, 1, 1])).toStrictEqual([]);
});

test("Test #05 - findBalancedSegment([1, 0, 1])", () => {
  expect(findBalancedSegment([1, 0, 1])).toStrictEqual([0, 1]);
});

test("Test #06 - findBalancedSegment([1, 0, 1, 0])", () => {
  expect(findBalancedSegment([1, 0, 1, 0])).toStrictEqual([0, 3]);
});

test("Test #07 - findBalancedSegment([1, 1, 0, 1, 0, 1])", () => {
  expect(findBalancedSegment([1, 1, 0, 1, 0, 1])).toStrictEqual([1, 4]);
});

test("Test #08 - findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])", () => {
  expect(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])).toStrictEqual([
    0, 7,
  ]);
});

test("Test #09 - findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])", () => {
  expect(
    findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
  ).toStrictEqual([5, 10]);
});
