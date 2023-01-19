  const mapping = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
  '0': '0',
  '1': '1'
};

function letterCombinations(digits) {
    if(!digits) return []
    let result = [''];
    for (let i = 0; i < digits.length; i++) {
        let currentDigit = digits[i];
        let temp = []
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < mapping[currentDigit].length; k++) {
                temp.push(result[j] + mapping[currentDigit][k]);
            }
        }
        result = temp;
    }
    return result.sort();
}

// }

module.exports = letterCombinations;
