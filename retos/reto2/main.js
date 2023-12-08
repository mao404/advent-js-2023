function manufacture(gifts, materials) {
  const result = gifts.filter((gift) => {
    return gift.split("").every((letter) => materials.includes(letter));
  });

  return result;
}

module.exports = manufacture;
