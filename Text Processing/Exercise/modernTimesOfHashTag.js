function modernTimesOfHashTag(text) {
    let textArr = text.split(" ");

    for (let ch of textArr) {
        if (ch[0] === '#' & ch.length > 0) {
            let words = ch.split("")
            words.shift();
            let result = "";

            for (let el of words) {
                if (!isNaN(el)) {
                    result = "";
                    break;
                } else {
                    result += el;
                }
            }
            if (result.length > 0) {
                console.log(result)
            }
        }


    }

}
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign'
)