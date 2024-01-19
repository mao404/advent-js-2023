function checkIsValidCopy(original, copy) {
  for (let indice = 0; indice < original.length; indice++) {
    let char = original[indice].match(/\w/g);
    const valid = `${char ? `${char}${char[0].toLowerCase()}` : ""}#+:. `;

    if (valid.indexOf(copy[indice]) < valid.indexOf(original[indice]))
      return false;
  }
  return true;
}

module.exports = checkIsValidCopy;
