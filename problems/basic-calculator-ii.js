// Source : https://leetcode.com/problems/basic-calculator-ii/
/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  // remove space
  s = s.replace(/\s/g, '');

  let nums = [];
  let num = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // number
    if (/\d/.test(c)) {
      // e.g. '14' -> 1 * 10 + 4
      num = num * 10 + Number(c);
    }

    // sign or last number
    if ((/\D/.test(c)) || i === s.length - 1) {
      if (sign === '-') nums.push(-num);
      if (sign === '+') nums.push(num);
      if (sign === '*') nums.push(nums.pop() * num);
      if (sign === '/') nums.push(~~(nums.pop() / num));

      sign = c;
      num = 0;
    }
  }

  let res = 0;

  for (let n of nums) {
    res += n;
  }

  return res;
}