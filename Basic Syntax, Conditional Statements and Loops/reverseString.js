function reverseString(char) {
    let charToString = String(char);
    let length = Number(charToString.length);
    let buff = ""
    for(let i = length - 1; i >= 0; i--) {
        let reverseChar = charToString[i];
        buff += reverseChar;
    }
    console.log(buff)
    
}
reverseString(1234);