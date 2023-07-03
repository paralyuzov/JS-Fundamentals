function partyTime(data) {

    let vipGuest = [];
    let regularGuest = [];

    let command = data.shift();
    while (command !== "PARTY") {
        let firstChar = command[0];
        if (isNaN(firstChar)) {
            regularGuest.push(command)
        } else {
            vipGuest.push(command)
        }
        command = data.shift();
    }

    let allGuest = vipGuest.concat(regularGuest);
    
    data.forEach(element =>{

        if(allGuest.includes(element)) {
            allGuest.splice(allGuest.indexOf(element),1)
        } 
    })

    console.log(allGuest.length);
    allGuest.forEach(element => console.log(`${element}`))


}

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])