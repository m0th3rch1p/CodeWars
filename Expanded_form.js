/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let strNum = num.toString();
    let expanded = [];
    for (let i = 0; i < strNum.length; i++) {
      if (strNum[i] !== '0') {
        expanded.push(strNum[i] + '0'.repeat(strNum.length - i - 1));
      }
    }
    return expanded.join(' + ');
  }
  