/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    if (!message.match(/\S/)) {
      return 'Fine. Be that way!';
    }
    else if (message.toUpperCase() === message && /[A-Z]/.test(message)) {
      return 'Whoa, chill out!';
    }
    else if (!message.match(/[^?]$/)) {
      return 'Sure.'
    }
    else {
      return 'Whatever.'
    }
  }
}

export default Bob;

