const checkIsValidCopy = require("./main");

test("Test #01 - Returns a Boolean", () => {
  expect(
    typeof checkIsValidCopy("Santa Claus is coming", "sa#ta cl#us is comin#")
  ).toBe("boolean");
});

test("Test #02 - checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')", () => {
  expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toStrictEqual(true);
});

test("Test #03 - checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')", () => {
  expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')).toStrictEqual(false);
});

test("Test #04 - checkIsValidCopy('Santa Claus', ' Santa Claus ')", () => {
  expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toStrictEqual(false);
});

test("Test #05 - checkIsValidCopy('Santa Claus', '###:. c:+##')", () => {
  expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toStrictEqual(true);
});

test("Test #06 - checkIsValidCopy('Santa Claus', 'sant##claus+')", () => {
  expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toStrictEqual(false);
});

test("Test #07 - checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')", () => {
  expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')).toStrictEqual(true);
});

test("Test #08 - checkIsValidCopy('Santa Claus', 's#+:.#c:. s')", () => {
  expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toStrictEqual(false);
});

test("Test #09 - checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')", () => {
  expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toStrictEqual(false);
});

test("Test #10 - checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')", () => {
  expect(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')).toStrictEqual(false);
});

test("Test #11 - checkIsValidCopy('3 #egalos', '3 .+:# #:')", () => {
  expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toStrictEqual(true);
});

test("Test #12 - checkIsValidCopy('3 regalos', '3        ')", () => {
  expect(checkIsValidCopy('3 regalos', '3        ')).toStrictEqual(true);
});

test("Test #13 - checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')", () => {
  expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toStrictEqual(true);
});

test("Test #14 - checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')", () => {
  expect(checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')).toStrictEqual(false);
});