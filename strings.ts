let capitalize = (str: string) => {
    let firstLetter: string = str[0].toUpperCase();
    return firstLetter + str.slice(1)
};

let allCaps = (str: string) => {
    return str.toUpperCase()
};

let capitalizeWords = (str: string) => {
    let wordArr: string[] = str.split(' ');
    let res: string[] = [];
    for (let word of wordArr) {
        res.push(capitalize(word))
    }
    return res.join(' ')
};

let removeExtraSpaces = (str: string) => {
    let wordArr: string[] = str.split(' ');
    let res: string[] = [];
    for (let word of wordArr) {
        if (word !== '') {
            res.push(word)
        }
    }
    return res.join(' ')
};

let kabobCase = (str: string) => {
    let cleanStr: string = removeExtraSpaces(str), wordArr: string[] = cleanStr.split(' ');
    return wordArr.join('-')
};

let snakeCase = (str: string) => {
    let cleanStr = removeExtraSpaces(str), wordArr = cleanStr.split(' ');
    return wordArr.join('_')
};

let camelCase = (str: string) => {
    let wordArr: string[] = str.split(' ');
    wordArr[0][0].toLowerCase();
    for (let i = 1; i < wordArr.length; i++) {
        wordArr[i] = capitalize(wordArr[i])
    }
    return wordArr.join('')
};

module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kabobCase = kabobCase;
module.exports.camelCase = camelCase;
module.exports.snakeCase = snakeCase;

