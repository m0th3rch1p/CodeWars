/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
    let ciphertxt = "";
    for (var i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        message.charCodeAt(i) + 13 > 90
          ? (ciphertxt += String.fromCharCode(message.charCodeAt(i) - 13))
          : (ciphertxt += String.fromCharCode(message.charCodeAt(i) + 13));
      } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
        message.charCodeAt(i) + 13 > 122
          ? (ciphertxt += String.fromCharCode(message.charCodeAt(i) - 13))
          : (ciphertxt += String.fromCharCode(message.charCodeAt(i) + 13));
      } else {
        ciphertxt += message[i];
      }
    }
  
    return ciphertxt;
  }