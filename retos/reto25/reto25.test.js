const travelDistance = require("./main");

test("Test #01 - Returns a number", () => {
  expect(
    typeof travelDistance(
      `.....1....
        ..S.......
        ..........
        ....3.....
        ......2...`
    )
  ).toBe("number");
});

test("Test #02", () => {
  expect(
    travelDistance(
      `.....1....
        ..S.......
        ..........
        ....3.....
        ......2...`
    )
  ).toStrictEqual(22);
});

test("Test #03", () => {
  expect(travelDistance(`..S.1...`)).toStrictEqual(2);
});

test("Test #04", () => {
  expect(
    travelDistance(
      `.....2....
        ..S.......
        ..........
        ....1.....
        ......3...`
    )
  ).toStrictEqual(27);
});

test("Test #05", () => {
  expect(
    travelDistance(
      `3....1....
        ..S.......
        .........2
        ..........
        ......4...`
    )
  ).toStrictEqual(57);
});

test("Test #06", () => {
  expect(travelDistance(`S1`)).toStrictEqual(1);
});

test("Test #07", () => {
  expect(travelDistance(`1....S`)).toStrictEqual(5);
});

test("Test #08", () => {
  expect(travelDistance(`S12....3`)).toStrictEqual(7);
});
