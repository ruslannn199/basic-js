const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
	chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value !== undefined ? value : ' '} )`);
		return this;
  },
  removeLink(position) {
		if (position < 1 || position > this.chain.length || typeof position !== 'number' || position !== Math.floor(position)){
			this.chain = [];
			throw new Error(`You can't remove incorrect link!`);
		}
		else {
			this.chain.splice(position - 1, 1);
		}
		return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
		return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
		this.chain = [];
		return result;
  },
};

module.exports = {
  chainMaker
};
