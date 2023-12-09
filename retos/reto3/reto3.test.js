const findNaughtyStep = require("./main");

test("Test #01 - Returns a String", () => {
  expect(typeof findNaughtyStep("abcd", "abcde")).toBe("string");
});

test("Test #02 - findNaughtyStep('abcd', 'abcde')", () => {
  expect(findNaughtyStep("abcd", "abcde")).toStrictEqual("e");
});

test("Test #03 - findNaughtyStep('abcde', 'abcd')", () => {
  expect(findNaughtyStep("abcde", "abcd")).toStrictEqual("e");
});

test("Test #04 - findNaughtyStep('xxxx', 'xxoxx')", () => {
  expect(findNaughtyStep("xxxx", "xxoxx")).toStrictEqual("o");
});

test("Test #05 - findNaughtyStep('stepfor', 'stepor')", () => {
  expect(findNaughtyStep("stepfor", "stepor")).toStrictEqual("f");
});

test("Test #06 - findNaughtyStep('iiiii', 'iiiii')", () => {
  expect(findNaughtyStep("iiiii", "iiiii")).toStrictEqual("");
});
