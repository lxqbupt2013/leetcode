
var descendiArr = function (matrix) {
    matrix = '' + matrix;            //这里对数组进行处理

    matrix = matrix.split(',');   
 
    var arr = [];
    for(var i = 0; i < matrix.length; i++){
        arr[i] = eval(matrix[i]);
    }
   
    return arr;
}

var findTargetInNmatrix = function(matrix, target) {

    var arr = descendiArr(matrix);
    var right = arr.length;
    var left = 0;

    var mid = Math.floor((left + right)/2);

    // 因为有序，使用二分查找
    while (left < right) {
        if (arr[mid] === target) {
            return true;
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
        mid = Math.floor((left + right)/2);
    }

    return false;
}

var matrix = [[[1,2,3,4],[2,3,4,5],[5,6,7,8]],[[9,10,11,12],[13,14,15,16],[17,18,19,20]]]

findTargetInNmatrix(matrix, 10)