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
    let ret = "";
    const stringLength = expr.length;
    const symbolsNumber = stringLength / 10;

    for (let i = 0; i < symbolsNumber; i++) {
        let symbolMorse = "";
        let str10 = expr.slice(i * 10, i * 10 + 10);

        for (let j = 0; j < 5; j++) {
            let checkpair = str10[j * 2] + str10[j * 2 + 1];

            if (checkpair === "10") {
                symbolMorse += ".";
            } else if (checkpair == "11") {
                symbolMorse += "-";
            }
        }

        if (symbolMorse === "") {
            ret += " ";
        } else {
            ret += MORSE_TABLE[symbolMorse];
        }
    }
    return ret;
}

module.exports = {
    decode,
};