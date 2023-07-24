function countStringOccurrences(text, word) {
    let counter = 0;
    let words = text.split(" ");
    for (let ch of words) {
        if (ch === word) {
            counter++
        }
    }
    console.log(counter)
}
countStringOccurrences('This is a word and it also is a sentence',
    'is')