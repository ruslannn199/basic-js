const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const keywords = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

function transform(arr) {
	if (!(arr instanceof Array)) throw Error(`\'arr\' parameter must be an instance of the Array!`);
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--double-next': {
				if (!(i + 1 === arr.length || keywords.includes(arr[i + 1]))) newArr.push(arr[i + 1]);
				break;
			}

			case '--double-prev': {
				if (arr[i - 2] === '--discard-next') continue;
				else if (!(i === 0 || keywords.includes(arr[i - 1]))) newArr.push(arr[i - 1]);
				break;
			}

			case '--discard-next': {
				if (!(i + 1 === arr.length || keywords.includes(arr[i + 1]))) i++;
				break;
			}

			case '--discard-prev': {
				if (arr[i - 2] === '--discard-next') continue;
				else if (!(i === 0 || keywords.includes(arr[i - 1]))) newArr.pop();
				break;
			}

			default: newArr.push(arr[i]);
		}
	}
	return newArr;
}

module.exports = {
  transform
};
