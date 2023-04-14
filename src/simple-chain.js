const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

class Node {
	constructor(value, next = null) {
		this.link = value;
		this.next = next;
	}
}

const chainMaker = {
	constructor() {
		this.head = null;
		this.tail = null;
	},

  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value = ' ') {
		const newNode = new Node(value);
		if (!this.head || !this.tail) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		this.tail.next = newNode;
		this.tail = newNode;

		return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) throw Error(`You can't remove incorrect link!`);
		if (!this.head) return null;

		throw new NotImplementedError('Not implemented');
  },
  reverseChain() {
		let currNode = this.head;
		let prevNode = null;
		let nextNode = null;

		while (currNode) {
			nextNode = currNode.next;
			currNode.next = prevNode;
			prevNode = currNode;
			currNode = nextNode;
		}

		this.tail = this.head;
		this.head = prevNode;

		return this;
  },
  finishChain() {
		throw new NotImplementedError('Not implemented');
		let arr = this.toArray();
		let str = ``;
		arr.forEach((elem, i) => {
			i === 0 ? str = `(${elem})` : str += `~~(${elem})`;
		});
		try {
			delete this;
		}
		catch {
			throw Error('Chain was deleted');
		}
		finally {
			return str
		}
  },

	toArray() {
		const nodes = [];
		let currentNode = this.head;

		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}

		return nodes;
	}
};

module.exports = {
  chainMaker
};
