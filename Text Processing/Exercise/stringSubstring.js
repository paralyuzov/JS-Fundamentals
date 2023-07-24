function stringSubstring(word, text) {
    let wordToLowCase = word.toLowerCase();
    let textToLowCase = text.toLowerCase();

    let characters = textToLowCase.split(" ");
    let isFound = true;

    for (let el of characters) {
        if (el === wordToLowCase) {
            console.log(el);
            return;
        } else {
            isFound = false;
        }
    }
    if (!isFound) {
        console.log(`${word} not found!`)
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language')