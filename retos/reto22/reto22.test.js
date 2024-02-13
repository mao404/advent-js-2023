const compile = require("./main");

test("Test #01 - Returns a Number", () => {
  expect(typeof compile("++*-")).toBe("number");
});

test("Test #02 - compile('++*-')", () => {
  expect(compile("++*-")).toStrictEqual(3);
});

test("Test #03 - compile('++¿+?')", () => {
  expect(compile("++¿+?")).toStrictEqual(3);
});

test("Test #04 - compile('-+¿+?')", () => {
  expect(compile("-+¿+?")).toStrictEqual(0);
});

test("Test #05 - compile('++*¿-?')", () => {
  expect(compile("++*¿-?")).toStrictEqual(3);
});

test("Test #06 - compile('++%++<')", () => {
  expect(compile("++%++<")).toStrictEqual(6);
});

test("Test #07 - compile('++%++<++¿*?')", () => {
  expect(compile("++%++<++¿*?")).toStrictEqual(16);
});

test("Test #08 - compile('++¿+?¿+?¿+?')", () => {
  expect(compile("++¿+?¿+?¿+?")).toStrictEqual(5);
});

test("Test #09 - compile('--¿+++?')", () => {
  expect(compile("--¿+++?")).toStrictEqual(-2);
});

test("Test #10 - compile('--¿+++?+++¿--?')", () => {
  expect(compile("--¿+++?+++¿--?")).toStrictEqual(-1);
});

test("Test #11 - compile('<%+¿++%++<?')", () => {
  expect(compile("<%+¿++%++<?")).toStrictEqual(7);
});

test("Test #12 - compile('<<<<<<+<<<<<+%')", () => {
  expect(compile("<<<<<<+<<<<<+%")).toStrictEqual(2);
});
