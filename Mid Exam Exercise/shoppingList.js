function shoppingList(data) {
    let list = data.shift().split("!");
    let index = 0;
    let commands = data[index];
    index++;

    while (commands !== "Go Shopping!") {
        let currComand = commands.split(" ");
        let toDo = currComand[0];
        let item = currComand[1];

        switch (toDo) {
            case "Urgent":
                if (list.includes(item)) {
                    commands = data[index];
                    index++
                    continue;
                } else {
                    list.unshift(item);
                }
                break;

            case "Unnecessary":
                if (!list.includes(item)) {
                    commands = data[index];
                    index++
                    continue;
                } else {
                    let currIndex = list.indexOf(item);
                    list.splice(currIndex, 1);
                }
                break;

            case "Correct":
                let newItem = currComand[2];
                if (list.includes(item)) {
                    let correctIndex = list.indexOf(item)
                    list.splice(correctIndex, 1, newItem);
                }
                break;

            case "Rearrange":
                if (list.includes(item)) {
                    let rearangeIndex = list.indexOf(item);
                    let rearrangeItem = list.splice(rearangeIndex,1);
                    list.push(rearrangeItem[0]);
                }
                break;
        }

        commands = data[index];
        index++
    }

    console.log(list.join(", "));
}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]))