function train(arr) {

    let wagons = arr[0].split(" ").map(Number);
    let maxCapacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {

        let command = arr[i].split(" ");

        if (command[0] === "Add") {

            wagons.push(Number(command[1]));

        } else {

            let passanger = Number(command[0]);

            for (let j = 0; j < wagons.length; j++) {

                if (maxCapacity - wagons[j] >= passanger) {
                    wagons[j] += passanger;
                    break;
                }

            }
        }
    }
    console.log(wagons.join(" "))

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)