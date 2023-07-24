function revealWords(words, text) {
    let arrWords = words.split(", ");
    for (let ch of arrWords) {
        let searchWord = '*'.repeat(ch.length);
        if (text.includes(searchWord)) {
            text = text.replace(searchWord, ch);
        }
    }
    console.log(text)
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')