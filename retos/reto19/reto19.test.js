const revealSabotage = require("./main");

test("Test #01 - Returns an Array", () => {
  expect(
    Array.isArray(
      revealSabotage([
        ["*", " ", " ", " "],
        [" ", " ", "*", " "],
        [" ", " ", " ", " "],
        ["*", " ", " ", " "],
      ])
    )
  ).toBe(true);
});

test("Test #02 - revealSabotage()", () => {
  expect(
    revealSabotage([
      ["*", " ", " ", " "],
      [" ", " ", "*", " "],
      [" ", " ", " ", " "],
      ["*", " ", " ", " "],
    ])
  ).toStrictEqual([
    ["*", "2", "1", "1"],
    ["1", "2", "*", "1"],
    ["1", "2", "1", "1"],
    ["*", "1", " ", " "],
  ]);
});

test("Test #03 - revealSabotage()", () => {
  expect(
    revealSabotage([
      [" ", " ", " "],
      [" ", "*", " "],
      [" ", " ", " "],
    ])
  ).toStrictEqual([
    ["1", "1", "1"],
    ["1", "*", "1"],
    ["1", "1", "1"],
  ]);
});

test("Test #04 - revealSabotage()", () => {
  expect(
    revealSabotage([
      ["*", " ", " "],
      [" ", "*", " "],
      [" ", " ", "*"],
    ])
  ).toStrictEqual([
    ["*", "2", "1"],
    ["2", "*", "2"],
    ["1", "2", "*"],
  ]);
});

test("Test #05 - revealSabotage()", () => {
  expect(
    revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ])
  ).toStrictEqual([
    ["*", "1", " "],
    ["1", "1", " "],
    [" ", " ", " "],
  ]);
});

test("Test #06 - revealSabotage()", () => {
  expect(
    revealSabotage([
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ])
  ).toStrictEqual([
    ["*", "*", "*"],
    ["*", "8", "*"],
    ["*", "*", "*"],
  ]);
});

test("Test #07 - revealSabotage()", () => {
  expect(revealSabotage([["*", " ", "*"]])).toStrictEqual([["*", "2", "*"]]);
});

test("Test #08 - revealSabotage()", () => {
  expect(
    revealSabotage([
      ["*", " ", " "],
      [" ", " ", " "],
      [" ", " ", "*"],
    ])
  ).toStrictEqual([
    ["*", "1", " "],
    ["1", "2", "1"],
    [" ", "1", "*"],
  ]);
});

test("Test #09 - revealSabotage()", () => {
  expect(
    revealSabotage([
      ["*", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", "*", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "*"],
    ])
  ).toStrictEqual([
    ["*", "1", " ", " ", " "],
    ["1", "2", "1", "1", " "],
    [" ", "1", "*", "1", " "],
    [" ", "1", "1", "2", "1"],
    [" ", " ", " ", "1", "*"],
  ]);
});
