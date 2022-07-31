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
};

function decode(expr) {
  const symbolsCount = expr.length / 10;
  const binaryArr = [];

  for (let i = 0; i < symbolsCount; i++) {
    const symbol = expr.slice(i * 10, i * 10 + 10);
    binaryArr.push(symbol);
  }

  const morseCodeArr = binaryArr.map((item) => {
    let result = "";
    for (let i = 0; i < item.length; i += 2) {
      if (item[i] == "1" && item[i + 1] == "1") {
        result += "-";
      } else if (item[i] == "1" && item[i + 1] == "0") {
        result += ".";
      }
    }
    return result;
  });

  const decodedArr = morseCodeArr.map((item) => {
    if (item === "") return " ";

    return MORSE_TABLE[item];
  });

  return decodedArr.join("");
}

module.exports = {
  decode,
};
