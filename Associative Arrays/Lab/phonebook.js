function phonebook(data) {
    let result = {};
    for(let line of data) {
        let [name,number] = line.split(" ");
        result[name] = number
    }

    for(let key in result) {
        console.log(`${key} -> ${result[key]}`)
    }

}
phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])