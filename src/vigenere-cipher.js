const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const reg = /[a-z]/gi;
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
	}
  encrypt(message, key) {
		if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);

		if (charCode >= 65 && charCode <= 90) {
			const keyCharCode = key.charCodeAt(j % key.length);
			let shiftedCharCode = charCode + keyCharCode - 65;

			if (shiftedCharCode > 90) {
				shiftedCharCode -= 26;
			}
			encryptedMessage += String.fromCharCode(shiftedCharCode);
			j++;
		} else {
			encryptedMessage += message.charAt(i);
		}
	}

		return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessage.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyCharCode = key.charCodeAt(j % key.length);
        let shiftedCharCode = charCode - keyCharCode + 65;

        if (shiftedCharCode < 65) {
          shiftedCharCode += 26;
        }

        decryptedMessage += String.fromCharCode(shiftedCharCode);

        j++;
      } else {
        decryptedMessage += encryptedMessage.charAt(i);
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
