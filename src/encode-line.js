const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let arr = Array.from(s), str = '';
	for (let i = 0; i < s.length; i++) {
		if (arr[i - 1] === arr[i]) {
			
		}
	}
	return str;
}

module.exports = {
  encodeLine
};
