function adjustLights(lights) {
  function checkLights(lights) {
    let changes = 0;

    for (let index = 1; index < lights.length; index++) {
      if (lights[index] === lights[index - 1]) {
        changes++;
        lights[index] = lights[index] === "🟢" ? "🔴" : "🟢";
      }
    }

    return changes;
  }

  return Math.min(checkLights([...lights]), checkLights([...lights].reverse()));
}

module.exports = adjustLights;
