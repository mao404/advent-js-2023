const drawGift = require("./main");

test("Test #01 - Returns a String", () => {
  expect(typeof drawGift(4, "+")).toBe("string");
});

test("Test #02 - drawGift(4, '+')", () => {
  expect(drawGift(4, "+")).toStrictEqual(
    "   ####\n" +
      "  #++##\n" +
      " #++#+#\n" +
      "####++#\n" +
      "#++#+#\n" +
      "#++##\n" +
      "####\n"
  );
});

test("Test #03 - drawGift(5, '*')", () => {
  expect(drawGift(5, "*")).toStrictEqual(
    "    #####\n" +
      "   #***##\n" +
      "  #***#*#\n" +
      " #***#**#\n" +
      "#####***#\n" +
      "#***#**#\n" +
      "#***#*#\n" +
      "#***##\n" +
      "#####\n"
  );
});

test("Test #04 - drawGift(1, '^')", () => {
  expect(drawGift(1, "^")).toStrictEqual("#\n");
});

test("Test #05 - drawGift(2, '&')", () => {
  expect(drawGift(2, "&")).toStrictEqual(" ##\n" + "###\n" + "##\n");
});

test("Test #06 - drawGift(10, '%')", () => {
  expect(drawGift(10, "%")).toStrictEqual(
    "         ##########\n" +
      "        #%%%%%%%%##\n" +
      "       #%%%%%%%%#%#\n" +
      "      #%%%%%%%%#%%#\n" +
      "     #%%%%%%%%#%%%#\n" +
      "    #%%%%%%%%#%%%%#\n" +
      "   #%%%%%%%%#%%%%%#\n" +
      "  #%%%%%%%%#%%%%%%#\n" +
      " #%%%%%%%%#%%%%%%%#\n" +
      "##########%%%%%%%%#\n" +
      "#%%%%%%%%#%%%%%%%#\n" +
      "#%%%%%%%%#%%%%%%#\n" +
      "#%%%%%%%%#%%%%%#\n" +
      "#%%%%%%%%#%%%%#\n" +
      "#%%%%%%%%#%%%#\n" +
      "#%%%%%%%%#%%#\n" +
      "#%%%%%%%%#%#\n" +
      "#%%%%%%%%##\n" +
      "##########\n"
  );
});
