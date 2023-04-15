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
  // throw new NotImplementedError('Not implemented');
	let k, str = '', i, j;
	for (i = 0; i < s.length; i++) {
		k = 1;
		for (j = i + 1; j < s.length; j++) {
			if (s[i] === s[j]) k++;
			else {
				i = j - 1;
				break;
			}
			if (j === s.length - 1) i = j;
		}
		k === 1 ? str += s[i] : str += `${k}${s[i]}`;
	}
	return str;
}

module.exports = {
  encodeLine
};
