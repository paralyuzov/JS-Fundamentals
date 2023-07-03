function aMinerTask(data) {
    let myObj = {}

    for (let i = 0; i < data.length; i += 2) {
        let resource = data[i];
        let quantity = Number(data[i+1]);
        if(!myObj.hasOwnProperty(resource)) {
            myObj[resource] = 0;
        }
        myObj[resource] += quantity
       
        
    }
    for(let key in myObj) {
        console.log(`${key} -> ${myObj[key]}`)
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )