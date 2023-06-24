function characterInRange(firstChar, secondChar) {
    
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let last = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let output = [];

    for (let i = start + 1; i < last; i++) {
        output.push(String.fromCharCode(i))

    }

    return  output.join(" ");

}
console.log(characterInRange('a', 'd'));