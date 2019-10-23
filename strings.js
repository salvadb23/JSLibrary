let capitalize = (str) => {
    let firstLetter = str[0].toUpperCase()
    return firstLetter + str.slice(1)
}

let allCaps = (str) => {
    return str.toUpperCase()
}

let capitalizeWords = (str) => {
    let wordArr = str.split(' ')
    let res = []
    for(let word of wordArr){
        res.push(capitalize(word))
    }
    return res.join(' ')
}

let removeExtraSpaces = (str) => {
    let wordArr = str.split(' ')
    let res = []
    for(let word of wordArr){
        if (word !== ''){
            res.push(word)
        }
    }
    return res.join(' ')
}

let kabobCase = (str) => {
    let cleanStr = removeExtraSpaces(str)
    let wordArr = cleanStr.split(' ')
    return wordArr.join('-')
}

let snakeCase = (str) => {
    let cleanStr = removeExtraSpaces(str)
    let wordArr = cleanStr.split(' ')
    return wordArr.join('_')
}

let camelCase = (str) => {
    let wordArr = str.split(' ')
    wordArr[0][0].toLowerCase()
    for(let i = 1; i < wordArr.length; i++){
        wordArr[i] = capitalize(wordArr[i])
    }
    return wordArr.join('')
}

console.log(capitalize('hello'))