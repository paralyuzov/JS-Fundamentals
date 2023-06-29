function adressBook(data) {

    let adressList = {};
    for (let line of data) {
        let [name, adress] = line.split(":");
        if (!adressList.hasOwnProperty(name)) {
            adressList[name] = 0;
        }
        adressList[name] = adress;
    }

    let assArr = Object.entries(adressList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let line of assArr) {
        let name = line[0];
        let adress = line[1];
        console.log(`${name} -> ${adress}`)
    }


}
adressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)