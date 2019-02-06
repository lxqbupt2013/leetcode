// Source : https://leetcode.com/problems/restore-ip-addresses/
// Author : Han Zichi
// Date   : 2015-09-11

/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  const res = [];
  dfs([], 0);
  return res;
  
  function dfs(prefix, idx) {
    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join('.'));
      return;
    }
    
    if (prefix.length === 4 || idx === s.length) {
      return;
    }
    
    for (let r = idx; r < s.length; r++) {
      if (r !== idx && s[idx] === '0') return;
      
      const num = parseInt(s.slice(idx, r+1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, r+1);
      prefix.pop();
    }
  }
}


var restoreIpAddresses = function(s) {
  var length = s.length;
  var result = [];
  parse([], 0);
  return result;
  function parse(prefix, idx) {
    if (prefix.length === 4) {
      return idx === length ? result.push(prefix.join('.')) : null;
    }
    for (var i = 1; i <= 3; i++) {
      var token = s.substring(idx, idx + i);
      if (/^(0|[^0]\d*)$/.test(token) && parseInt(token) < 256) {
        var newPrefix = prefix.slice(0);
        newPrefix.push(token);
        parse(newPrefix, idx + i);
      }
    }
  }
};