function oddOccurrences(data) {
    let words = data.split(" ").map(w => w.toLowerCase());

    let myObj = {};
    for (let word of words) {
        if (!myObj.hasOwnProperty(word)) {
            myObj[word] = 0;
        }
        myObj[word]++
    }

    let arr = Object.entries(myObj).filter(x => x[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);
    let output = ""
    arr.forEach(element => {
        let el = element[0];
        output += `${el} `
    })
    console.log(output)
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')