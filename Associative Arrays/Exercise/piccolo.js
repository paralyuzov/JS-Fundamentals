function piccolo(data) {
    let set = new Set();
    data.forEach(element => {
        let tokens = element.split(", ");
        let operation = tokens[0];
        let carNumber = tokens[1];

        if(operation === "IN") {
            set.add(carNumber)
        } else {
            if(set.has(carNumber)) {
                set.delete(carNumber)
            }
        }
       
        
    })
    if(set.size === 0) {
        console.log(`Parking Lot is Empty`);
        return;
    }
    
    let arr = Array.from(set).sort((a,b)=> a.localeCompare(b));
    arr.forEach(element => console.log(`${element}`))

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])