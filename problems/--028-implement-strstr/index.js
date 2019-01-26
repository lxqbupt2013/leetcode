/**
 * https://leetcode.com/problems/implement-strstr/
 *
 * Implement strStr().
 *
 * Returns the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = module.exports = function (haystack, needle) {
//   if (needle === '') return 0;
//   var needleBacktrackPosition = generateNeedleBacktrackPosition(needle);
//   var j = -1;
//   for (var i = 0; i < haystack.length; i++) {
//     while (j > -1 && needle[j + 1] !== haystack[i]) {
//       j = needleBacktrackPosition[j];
//     }
//     if (needle[j + 1] === haystack[i]) {
//       j++;
//     }
//     if (j === needle.length - 1) return (i - needle.length + 1);
//   }
//   return -1;
// };

// function generateNeedleBacktrackPosition(needle) {
//   var result = [-1];
//   var j = -1;
//   for (var i = 1; i < needle.length; i++) {
//     while (j > -1 && needle[j + 1] !== needle[i]) {
//       j = result[j];
//     }
//     if (needle[j + 1] === needle[i]) {
//       j++;
//     }
//     result[i] = j;
//   }
//   return result;
// }

var strStr = module.exports = function (haystack, needle) {
     
  if(haystack === null || needle === null) return -1;
  if(needle === '') return 0;
  
  var len1 = needle.length;
  var len2 = haystack.length;
  if(len1 > len2) return -1;
  if(len1 === len2) return (haystack === needle ? 0 : -1);
  
  var index = -1;
  
  var c = needle.split('')[0];
  
  for(var i = 0; i < len2; i++) {
      if (index != -1)
          break;
      if(haystack[i] === c) {
          if (len1 === 1)  index = i;
          for (var j = i+1; j < i + len1; j ++) {
              if(haystack[j] !== needle[j-i]) {
                  index = -1;
                  break;
              } else {
                  index = i;
              }
          }
      }
  }
  return index; 
}