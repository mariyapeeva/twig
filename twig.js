
/** 
 * Partition an array into N parts
 * @param arr The array
 * @param N Number of parts
 * 
 * @return output Partitioned array
 * */

function groupArrayElements(arr, N) {

	var part = Math.ceil(arr.length/N); // part size
	var len = N*part; // n parts

	var output = [];
	// partition
	for(let i = 0; i < len; i+=part) {
		output.push(arr.slice(i, i+part));
	}

	return output;
}

var arr = [1, 2, 3, 4, 5];
var N = 3;

console.log(groupArrayElements(arr, N));