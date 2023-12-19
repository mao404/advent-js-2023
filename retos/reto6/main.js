function maxDistance(movements) {
  let distance = 0;

  let right = movements.match(/>/g)?.length ?? 0;
  let left = movements.match(/</g)?.length ?? 0;

  distance += right;
  distance -= left;

  let extraStep = movements.length - (right + left);

  return Math.abs(distance) + extraStep;
}

module.exports = maxDistance;
