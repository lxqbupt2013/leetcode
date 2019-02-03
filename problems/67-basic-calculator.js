// Source : https://leetcode.com/problems/basic-calculator/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let result = 0, sign = 1;
  const stack = [], opStack = [];
  
  for(let i = 0; i < s.length; i++){
      const curr = s.charAt(i);
      if(curr === ' '){ 
          continue;
      } else if(curr === '+'){ 
          sign = 1;
      } else if(curr === '-'){ 
          sign = -1;
      } else if(curr >= '0' && curr <= '9'){
          let num = curr;
          while(i+1 < s.length && s.charAt(i+1) >= '0' && s.charAt(i+1) <= '9'){
              num += s.charAt(i+1);
              i++;
          }
          result += sign * parseInt(num);
      } else if(curr === '('){
          stack.push(result);  
          result = 0;  
          opStack.push(sign);  
          sign = 1;
      } else if(curr === ')'){
          result = opStack.pop() * result + stack.pop();  
          sign = 1;
      }
  }
  return result;
};