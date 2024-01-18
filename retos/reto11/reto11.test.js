const getIndexsForPalindrome = require("./main");

test("Test #01 - Returns an Array", () => {
  expect(Array.isArray(getIndexsForPalindrome("anna"))).toBe(true);
});

test("Test #02 - getIndexsForPalindrome('anna')", () => {
  expect(getIndexsForPalindrome("anna")).toStrictEqual([]);
});

test("Test #03 - getIndexsForPalindrome('abab')", () => {
  expect(getIndexsForPalindrome("abab")).toStrictEqual([0, 1]);
});

test("Test #04 - getIndexsForPalindrome('abac')", () => {
  expect(getIndexsForPalindrome("abac")).toStrictEqual(null);
});

test("Test #05 - getIndexsForPalindrome('aaaaaaaa')", () => {
  expect(getIndexsForPalindrome("aaaaaaaa")).toStrictEqual([]);
});

test("Test #06 - getIndexsForPalindrome('aaababa')", () => {
  expect(getIndexsForPalindrome("aaababa")).toStrictEqual([1, 3]);
});

test("Test #07 - getIndexsForPalindrome('caababa')", () => {
  expect(getIndexsForPalindrome("caababa")).toStrictEqual(null);
});

test("Test #08 - getIndexsForPalindrome('rotavator')", () => {
  expect(getIndexsForPalindrome("rotavator")).toStrictEqual([]);
});

test("Test #09 - getIndexsForPalindrome('rotaratov')", () => {
  expect(getIndexsForPalindrome("rotaratov")).toStrictEqual([4, 8]);
});

test("Test #10 - getIndexsForPalindrome('saippuakivikauppias')", () => {
  expect(getIndexsForPalindrome("saippuakivikauppias")).toStrictEqual([]);
});
