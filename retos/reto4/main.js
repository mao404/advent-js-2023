function decode(message) {
  const regex = new RegExp(/\(([^()]+)\)/, "g");
  const invertedGroups = (_, group) => group.split("").reverse().join("");

  return message.replace(regex, invertedGroups).replace(regex, invertedGroups);
}

module.exports = decode;
