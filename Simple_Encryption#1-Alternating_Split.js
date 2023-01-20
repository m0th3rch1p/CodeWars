/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
    for (let i = 0; i < n; i++) {
      let even = "";
      let odd = "";
      for (let j = 0; j < text.length; j++) {
        if (j % 2 === 0) {
          even += text[j];
        } else {
          odd += text[j];
        }
      }
      text = odd + even;
    }
    return text;
  }
  
  function decrypt(encryptedText, n) {
    for (let i = 0; i < n; i++) {
      let newText = "";
      for (let j = 0; j < Math.ceil(encryptedText.length / 2); j++) {
        newText += encryptedText[j] + encryptedText[j + Math.ceil(encryptedText.length / 2)];
      }
      encryptedText = newText;
    }
    return encryptedText;
  }

/*************************************************************************************************************************************************
 * Improvement by z3r0
 */

function encrypt(text, n) {
  if (!text || n <= 0) return text;
  let cypherTxt=[[...text],"",""];
  for (let j=0; j<n; j++) {
      cypherTxt[1]="";
      cypherTxt[2]="";
      for (let i=0; i<[...text].length; i++) {
          if (i%2 === 0){
              cypherTxt[2]+=cypherTxt[0][i];
          } else {
              cypherTxt[1]+=cypherTxt[0][i];
          }
          
      }
      cypherTxt[0]=cypherTxt[1] + cypherTxt[2]
  }
  return cypherTxt[1] + cypherTxt[2]
}