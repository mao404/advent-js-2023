function createChristmasTree(ornaments, height) {
  let tree = "";
  let index = 0;

  for (let line = 0; line < height; line++) {
    const orn = Array.from(
      { length: line + 1 },
      () => ornaments[index++ % ornaments.length]
    );

    tree += `${orn.join(" ").padStart(height + line)}\n`;
  }

  return `${tree}${"|".padStart(height)}\n`;
}

module.exports = createChristmasTree;
