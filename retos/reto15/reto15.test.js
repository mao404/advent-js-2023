const autonomousDrive = require("./main");

test("Test #01 - autonomousDrive(['..!....'], ['R', 'L'])", () => {
  expect(Array.isArray(autonomousDrive(["..!...."], ["R", "L"]))).toBe(true);
});

test("Test #02 - autonomousDrive(['..!....'], ['R', 'L'])", () => {
  expect(autonomousDrive(["..!...."], ["R", "L"])).toStrictEqual(["..!...."]);
});

test("Test #03 - autonomousDrive(['!..', '***'], ['R', 'L'])", () => {
  expect(autonomousDrive(["!..", "***"], ["R", "L"])).toStrictEqual([
    "!..",
    "***",
  ]);
});

test("Test #04 - autonomousDrive(['..!....','......*'],['R', 'D', 'L'])", () => {
  expect(
    autonomousDrive(["..!....", "......*"], ["R", "D", "L"])
  ).toStrictEqual([".......", "..!...*"]);
});

test("Test #05 - autonomousDrive(['*..!..*','*.....*'],['R', 'R', 'D', 'D'])", () => {
  expect(
    autonomousDrive(["*..!..*", "*.....*"], ["R", "R", "D", "D"])
  ).toStrictEqual(["*.....*", "*....!*"]);
});

test("Test #06 - autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])", () => {
  expect(
    autonomousDrive(["***", ".!.", "***"], ["D", "U", "R", "R", "R"])
  ).toStrictEqual(["***", "..!", "***"]);
});

test("Test #07 - autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])", () => {
  expect(
    autonomousDrive(["***", "*!*", "***"], ["D", "U", "R", "L"])
  ).toStrictEqual(["***", "*!*", "***"]);
});

test("Test #08 - autonomousDrive(['.**.*.*.','.***....','..!.....'], ['D', 'U', 'R', 'R', 'R'])", () => {
  expect(
    autonomousDrive(
      [".**.*.*.", ".***....", "..!....."],
      ["D", "U", "R", "R", "R"]
    )
  ).toStrictEqual([".**.*.*.", ".***....", ".....!.."]);
});
