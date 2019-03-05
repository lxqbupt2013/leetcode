// 快速排序
var quickSort = function(arr) {
	if(arr.length <= 1) return arr;
	
	var left = [];
	var right = [];

    var pivotIndex = Math.floor(arr.length / 2);
    // 这一步非常关键，需要将pivot另外存储，不能直接指向arr[pivotIndex]
    // 如果pivotIndex 取0 ，时间要长一些？
	var pivot = arr.splice(pivotIndex, 1)[0];

	for(var i = 0; i < arr.length; i ++) {
		if(arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(right));
}

// js内置排序
var jsSort = function(arr) {
	return arr.sort(function(a, b) {
		return a - b
	});
}

// 归并排序
var mergeSort = function(arr) {
	if(arr.length < 2) return;

	var step = 1;
	var left, right;

	while(step < arr.length) {
		left = 0;
		right = step;

		while(right + step <= arr.length) {
			mergeArrs(arr, left, left + step, right, right + step);
			left = right + step;
			right = left + step;
		}
		if(right < arr.length) {
			mergeArrs(arr, left, left + step, right, arr.length);
		}
		step *= 2;
	}
}

function mergeArrs(arr, startLeft, stopLeft, startRight, stopRight) {
	var rightArr = new Array(stopRight - startRight + 1);
	var leftArr = new Array(stopLeft - startLeft + 1);
	
	k = startRight;
	for(var i = 0; i < rightArr.length - 1; i++) {
		rightArr[i] = arr[k];
		k ++;
	}
	
	k = startLeft;
	for(var i = 0; i < leftArr.length - 1; i++) {
		leftArr[i] = arr[k];
		k ++;
	}

	rightArr[rightArr.length - 1] = Infinity;
	leftArr[leftArr.length - 1] = Infinity;

	var m = 0;
	var n = 0;

	for(var k = startLeft; k < stopRight; k++) {
		if(leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[m];
			m ++;
		} else {
			arr[k] = rightArr[n];
			n ++;
		}
	}
}

// 生成随机数组
function randomArr(n) {
	var arr = [];

	for(var i = 0; i < n; i++) {
		arr.push(Math.floor(Math.random() * (n + 1)))
	}
	return arr;
}

// 1. 创建一个包含1000个整数的有序数组，比较快速排序、归并排序用时
// 2. 创建一个包含1000个整数的倒序数组，比较快速排序、归并排序用时
// 3. 创建一个包含1000个整数的随机数组，比较快速排序、归并排序和js内置排序的用时

var arr = randomArr(1000)
var newArr1 = quickSort(arr);
var newArr2 = newArr1.reverse();

// 1 正序
var startTime1 = new Date().getTime();
quickSort(newArr1);
var stopTime1 = new Date().getTime();
var quickTime = stopTime1 - startTime1;
console.log(quickTime)
// 输出1

var startTime2 = new Date().getTime();
quickSort(newArr1);
var stopTime2 = new Date().getTime();
var mergeTime = stopTime2 - startTime2;
console.log(mergeTime)
// 输出0

// // 2 逆序
var startTime = new Date().getTime();
mergeSort(newArr2);
var stopTime = new Date().getTime();
var quickTime = stopTime - startTime;
console.log(quickTime)
// 输出2

var startTime = new Date().getTime();
mergeSort(newArr2);
var stopTime = new Date().getTime();
var mergeTime = stopTime - startTime;
console.log(mergeTime)
// 输出3

// 3 内置
var startTime = new Date().getTime();
quickSort(arr);
var stopTime = new Date().getTime();
var quickTime = stopTime - startTime;
console.log(quickTime)
// 输出2

var startTime = new Date().getTime();
mergeSort(arr);
var stopTime = new Date().getTime();
var mergeTime = stopTime - startTime;
console.log(mergeTime)
// 输出2

var startTime = new Date().getTime();
jsSort(arr);
var stopTime = new Date().getTime();
var jsSortTime = stopTime - startTime;
console.log(jsSortTime)
// 输出2
