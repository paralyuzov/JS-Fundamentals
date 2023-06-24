function movingTarget(data) {
    let targets = data.shift().split(" ").map(Number);
    let index = 0;
    let commands = data[index];
    index++;

    while (commands !== "End") {
        let currComand = commands.split(" ");
        let operation = currComand[0];
        let currIndex = Number(currComand[1]);
        let value = Number(currComand[2]);

        switch (operation) {
            case "Shoot":
                if (currIndex < targets.length && currIndex >= 0) {
                    targets[currIndex] -= value;
                    if (targets[currIndex] <= 0) {
                        targets.splice(currIndex, 1);
                    }
                }
                break;

            case "Add":
                if (currIndex < targets.length && currIndex >= 0) {
                    targets.splice(currIndex,0,value)
                } else {
                    console.log(`Invalid placement!`);
                }
                break;

            case "Strike" :
                let itemsToRemove = value * 2 + 1;
                let startToRemove = currIndex - value;
                if(currIndex - value >= 0 && currIndex + value < targets.length) {
                    targets.splice(startToRemove,itemsToRemove);

                } else {
                    console.log(`Strike missed!`)
                }
                break;
        }
        commands = data[index];
        index++;
    }

    console.log(targets.join("|"))
}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]))