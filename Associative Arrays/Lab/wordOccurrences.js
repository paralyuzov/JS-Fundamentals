function wordOccurrences(data) {
    let map = new Map();
    for(let line of data) {
        let word = line;
        if(map.has(word)) {
           
            map.set(word,map.get(word) + 1)
        } else {
            map.set(word,1)
        }
       
    }

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);
    
    for(let line of sorted) {
        let word = line[0];
        let times = line[1];
        console.log(`${word} -> ${times} times`)
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])