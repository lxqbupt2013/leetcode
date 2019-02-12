// https://leetcode.com/problems/random-pick-index/

var Solution = function(nums) {
    const map = new Map();
    nums.forEach((num, index) => {
        if (!map.get(num)) map.set(num, [index]);
        else map.get(num).push(index);
    });
    this.nums = map;
};

Solution.prototype.pick = function(target) {
    const indexes = this.nums.get(target);
    return indexes ? indexes[Math.floor((Math.random() * indexes.length))] : null;
};


// 蓄水池抽样
var Solution = function(nums) {
    this.nums = nums;
};

Solution.prototype.pick = function(target) {

    var len = this.nums.length;
    var result = 0;
    var count = 0;

    for(var i = 0; i < len; i++) {
        if(this.nums[i] === target) {
            count ++;
            if(count === 1) {
                result = i;
            }
            else {
                var randomNum = Math.random() % count;
                if(randomNum === 0) {
                    result = i;
                }
            }
        }
    }
    return result;
}
