function destinationMapper(data) {
    let pattern = /([\/=])(?<destination>[A-Z)][(A-Za-z)]{2,})\1/gm
    let mathc = pattern.exec(data);
    let points = 0;
    let output = [];
    while (mathc !== null) {
        let destination = mathc[2];
        output.push(destination);
        for (let i = 0; i < destination.length; i++) {
            
            points++;
        }
        mathc = pattern.exec(data)
    }
    console.log(`Destinations: ${output.join(", ")}`);
    console.log(`Travel Points: ${points}`);



}
destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))