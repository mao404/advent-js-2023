const adjustLights = require("./main");

test("Test #01 - Returns a Number", () => {
  expect(typeof adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toBe("number");
});

test("Test #02 - adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])", () => {
  expect(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toStrictEqual(1);
});

test("Test #03 - adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])", () => {
  expect(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])).toStrictEqual(2);
});

test("Test #04 - adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])", () => {
  expect(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])).toStrictEqual(1);
});

test("Test #05 - adjustLights(['🟢','🔴', '🟢', '🔴', '🟢'])", () => {
  expect(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])).toStrictEqual(0);
});

test("Test #06 - adjustLights(['🔴', '🔴', '🔴'])", () => {
  expect(adjustLights(["🔴", "🔴", "🔴"])).toStrictEqual(1);
});
