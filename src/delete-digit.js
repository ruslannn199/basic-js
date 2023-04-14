const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let arr = Array.from(n.toString()), max, temp;
	for (let i = 0; i < arr.length; i++) {
		temp = '';
		for (let j = 0; j < arr.length; j++) {
			if (i !== j) temp += arr[j];
		}
		if (i === 0 || Number.parseInt(temp, 10) > max) max = Number.parseInt(temp, 10);
	}
	return max;
}

module.exports = {
  deleteDigit
};
