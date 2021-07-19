const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = numbToDots(expr+'');
    arr = arr.map(x => x.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g,''));
    return arr.map(x=>x= x.includes('*') ? ' ' : MORSE_TABLE[x]).join('');
}

function numbToDots(str) {
    let ret = [];
    let sub = '';
    
    for(let i = 0; i < str.length; i++) {
        sub += str[i];
        if(sub.length==10) {
            ret.push(sub);
            sub = '';
        }
    }
    return ret;
}

module.exports = {
    decode
}