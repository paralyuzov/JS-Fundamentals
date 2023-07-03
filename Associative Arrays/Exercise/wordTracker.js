function wordTracker(data) {
    
    let map = new Map();
    let words = data.shift().split(" ");
    words.forEach(w => {
        map.set(w,0)
    })

    data.forEach(element => {
        let tokens = element.split(" ");
        let word = tokens[0];
        if (map.has(word)) {
            let oldValue = map.get(word);
            map.set(word, oldValue + 1)


        }
    })

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`)
    }

}
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
)