function houseParty(arr) {
    let list = [];

    for (let i = 0; i < arr.length; i++) {
        let details = arr[i].split(" ");
        let person = details[0];
        if (details.includes("not")) {

            if (list.includes(person)) {
                let nameIndex = list.indexOf(person);
                if (nameIndex !== -1) {
                    list.splice(nameIndex, 1);
                }
            } else {
                console.log(`${person} is not in the list!`)
            }
        } else {
            if (list.includes(person)) {
                console.log(`${person} is already in the list!`);
            } else {
                list.push(person)
            }
        }
    }

    list.forEach(person => console.log(person))


}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)
