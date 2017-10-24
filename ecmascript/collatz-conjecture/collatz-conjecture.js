export default function steps(x) {
  let step = 0;
  if (x == 0 || x < 0) {
    throw new Error('Only positive numbers are allowed');
  }
  if (x == 1) return 0;

  while (x != 1) {
    if (x % 2 == 0) {
      x /= 2;
    } else {
      x = x * 3 + 1;
    }
    step++;
  }
  return step;
}
