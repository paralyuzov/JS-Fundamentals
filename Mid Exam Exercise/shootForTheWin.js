function shootForTheWin(data) {
    let targets = data.shift().split(" ").map(Number);
    let index = 0;
    let command = data[index];
    index++;

    let temp = 0;
    let count = 0;

    while (command !== "End") {
        let currTarget = Number(command);
        temp = targets[currTarget];

        if (targets[currTarget] === -1) {
            command = data[index];
            index++;
            continue;
        }
        if (currTarget > targets.length - 1 || currTarget < 0) {
            command = data[index];
            index++;
            continue;
        }

        targets[currTarget] = -1;
        count++

        for (let i = 0; i < targets.length; i++) {

            if (i === currTarget) {
                continue;
            }
            if (targets[i] === - 1) {
                continue;
            }
            let currElement = targets[i];
            if (temp >= currElement) {

                targets[i] += temp;
            } else {
                targets[i] -= temp;
            }

        }

        command = data[index];
        index++;
    }
    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shootForTheWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]))