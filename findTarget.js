var findTarget = function(matrix, target) {

    // 异常处理
    if(matrix === undefined) return false;
    if(matrix.length === 0) return false;

    var tempArr;

    for (var m = 0; m < matrix.length; m ++) {
        tempArr = matrix[m];

        var i = tempArr.length - 1;
        var colLen = tempArr[0].length
        var j = 0;

        // 如果该面最大的数比target还小，说明在下一个面中，直接开始下一次迭代
        if(matrix[m][0][0] === target) {
            return true;
        } else if(matrix[m][tempArr.length-1][colLen-1] < target) {
            continue;
        }

        // 二维数组的比较，从左下角开始
        while (i >= 0 && j < colLen ) {

            if(tempArr[i][j] === target) {
                return true;
            } else if(tempArr[i][j] > target) {
                i -= 1;
            } else {
                j += 1;  //matrix[i][j]) < target
            }
        }
    }

    return false;
}

var matrix = [[[1,2,3,4],[2,3,4,5],[5,6,7,8]],[[9,10,11,12],[13,14,15,16],[17,18,19,20]]]

findTarget(matrix,10)