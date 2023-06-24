function rightPlace(stringOne,char,result) {
    let res = stringOne.replace('_',char);
    let output = res === result ? "Matched": "Not Matched";
    console.log(output)
}
rightPlace('Str_ng', 'i',
'String')