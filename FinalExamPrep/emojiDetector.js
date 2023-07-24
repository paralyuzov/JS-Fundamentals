function emojiDetector(data) {
    let emojiPattern = /([*]|[:]){2}([A-Z][a-z]{2,})\1{2}/gm;
    let numPattern = /\d+/g;

    let treshold = 1;
    let count = 0;

    let numMatch = numPattern.exec(data);
    while (numMatch !== null) {
        let num = numMatch[0].split("");
        for (let i = 0; i < num.length; i++) {
            let currNum = Number(num[i]);
            treshold *= currNum
        }
        numMatch = numPattern.exec(data);
    }
    console.log(`Cool threshold: ${treshold}`);

    let emojiMatch = emojiPattern.exec(data);
    let res = [];
    while (emojiMatch !== null) {
        let emoji = emojiMatch[2].split("");
        count++;
        let sum = 0;
        for (let j = 0; j < emoji.length; j++) {
            let currCh = emoji[j];
            let value = currCh.charCodeAt();
            sum += value;
        }
        if (sum > treshold) {
            res.push(emojiMatch[0]);
        }

        emojiMatch = emojiPattern.exec(data);
    }
    console.log(`${count} emojis found in the text. The cool ones are:`);
    if (res.length > 0) {
        res.forEach(x => console.log(x));
    }

}
emojiDetector((["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]))