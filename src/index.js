const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "spase": ' '
};

function decode(expr) {
    strArr = [];
    for (i = 0; i < (expr.length)/10; i++) {
        let letter = expr.substr(i*10, 10);
        let regExp10 = /10/g;
        let regExp11 = /11/g;
        let reqExpStar = /(\*){10}/;
        let regExp00 = /00/g;
        letter = letter.replace(regExp10, '.');
        letter = letter.replace(regExp11, '-');
        letter = letter.replace(regExp00, '');
        letter = letter.replace(reqExpStar, 'spase');
        strArr.push(MORSE_TABLE[letter.trim()]);
    }
  return strArr.join('');
}

module.exports = {
  decode
};
