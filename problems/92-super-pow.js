// Source : https://leetcode.com/problems/super-pow/

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
function superPow(a, b) {
  let res = 1;
  for (let n of b) {
    let next = 1;
    for (let i = 0; i < 10; i++) {
      next *= res;
      next %= 1337;
    }
    for (let i = 0; i < n; i++) {
      next *= a;
      next %= 1337;
    }
    res = next;
  }
  return res;
}