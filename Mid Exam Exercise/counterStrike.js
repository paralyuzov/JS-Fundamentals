function counterStrike(data) {
    let initialEnergy = Number(data.shift());
    let index = 0;
    let command = data[index];
    index++;
    let count = 0;

    while (command !== "End of battle") {
        let distance = Number(command);

        if(initialEnergy < distance) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`);
            return;
        }
        count++

        
        if (count % 3 === 0) {
            initialEnergy += count;
        }
        initialEnergy -= distance


        command = data[index];
        index++
    }

    console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`)

}
counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"]))