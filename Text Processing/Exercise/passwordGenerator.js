function passwordGenerator(data) {
    let concatenate = (data[0] + data[1])
    let text = data[2].toUpperCase();
    let index = 0;

    for (let i = 0; i < concatenate.length; i++) {
        let char = concatenate[i]
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

            if (index === text.length) {
                index = 0;
            }

            concatenate = concatenate.replace(concatenate[i], text[index]);
            index++

        }

    }
    concatenate = concatenate.split("").reverse().join("");
    console.log(`Your generated password is ${concatenate}`)
}
passwordGenerator([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
]

)
// a, e, i, o, and u