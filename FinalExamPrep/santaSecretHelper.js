function santaSecretHelper(data) {
    let key = Number(data.shift());
    let decrypted = "";

    for (let line of data) {
        if (line === "end") {
            break;
        }
        let element = line.split("");
        for (let i = 0; i < element.length; i++) {
            let ch = element[i];
            let value = ch.charCodeAt();
            let decrypt = String.fromCharCode(value - key);
            decrypted += decrypt
        }
    }

    let pattern = /@([A-Za-z]+)[^@\-!:>]+[!]([A-Z])[!]/gm;

    let match = pattern.exec(decrypted);
    while (match !== null) {

        let name = match[1];
        let type = match[2];
        if (type === "G") {
            console.log(name)
        }

        match = pattern.exec(decrypted);
    }


}
santaSecretHelper(["3",
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
    "ppqmkkkmnolmnnCEhq/vkievk$Q$",
    "yyegiivoguCYdohqwlqh/kguimhk$J$",
    "end"])