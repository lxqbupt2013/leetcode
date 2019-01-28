var findTarget = function(matrix, target) {

    // 异常处理
    if(matrix === undefined) return false;
    if(matrix.length === 0) return false;

    var tempArr;

    for (var m = 0; m < matrix.length; m ++) {
        if (tempArr === undefined) {
            tempArr = matrix[m];
        } else {
            var tempArr2 = tempArr;
            tempArr = tempArr2[m];
            console.log(tempArr)

            var rowLen = tempArr.length;
            var colLen = tempArr[0].length;

            for (var k = 0; k < tempArr2.length; k++) {
                tempArr = tempArr2[k];
                if(typeof tempArr[0][0] === 'number') {
                    console.log('jinlaile1')
                    var i=0;
                    var j = tempArr[0].length-1;
                    while (i >=0 && j < colLen ) {
                        console.log('jinlaile2')
                        if(tempArr[i][j] === target) {
                            return true;
                        } else if(tempArr[i][j] > target) {
                            i -= 1;
                        } else {
                            j += 1;  //matrix[i][j]) < target
                        }
                    }                    
                } else {
                    tempArr = tempArr[i];
                }
            }
        }
    }

    return false;
}


var matrix = [[[1,2,3,4],[2,3,4,5],[5,6,7,8]],[[9,10,11,12],[13,14,15,16],[17,18,19,20]]]


findTarget(matrix,10)