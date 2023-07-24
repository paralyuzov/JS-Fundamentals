function replaceRepeatingChars(text) {
    let characters = text.split("");
    let res = "";
    for (let i = 0; i < characters.length; i++) {
        let currChar = characters[i];
        let nextChar = characters[i + 1];
        if (currChar !== nextChar) {
            res += currChar
        }
    }
    console.log(res)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('abcdedsa');
replaceRepeatingChars('qqqwerqwecccwd');
console.log(`qwerqwecwd`);