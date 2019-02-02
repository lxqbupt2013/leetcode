// Source : https://leetcode.com/problems/beautiful-arrangement/?tab=Description
// Author : Han Zichi
// Date   : 2017-02-27

/**
 * @param {number} N
 * @return {number}
 */
// 第i个位置的数可以被i整除或可以整除i
// 回溯法：
// 简单来说，假设有一棵树，需要找到所有从树的根节点到叶节点的遍历方式，回溯算法会从根开始，然后选择一个根的节点，再从根的节点的节点进行选择，重复地进行直到找到一个叶节点，找到叶节点后会返回上一次遍历的节点寻找其他未遍历的其他节点，这样省去了重复的遍历过程，保证每次遍历都是新的。
// 当N为5时，使用回溯算法先是得到（1,2,3,4,5）排列，符合要求，符合要求的排列数count+1，接着回溯到第四个位置，在剩下的选择中选5，但发现5不符合要求，然后跳过，不再往后判断。同样当得到（1,2,5）这前三个排列时，5已经不符合要求，也不会再往后判断（1,2,5,x,x）。这样减少了直接穷举递归方法中很多不需要判断操作，提高了效率。
var countArrangement = function(N) {
    
  var count = 0;
  var hashMap = {};
  function solve(N, k, arr){ 
    if(arr.length === N + 1){
          count++;
          // console.log(arr); // print all the permutations
      return;
    }

    for(let i = 1; i <= N; i++){
          if(hashMap[i]){
              continue;
          }
        
        if(k % i === 0 || i % k === 0){
          arr[k] = i;
          hashMap[i] = true;
          solve(N, k + 1, arr);
          
          // backtrack
          arr.pop(); 
          hashMap[i] = false;;
        }
    }
    
  }
  
  
  solve(N, 1, []);
    
  return count;


};