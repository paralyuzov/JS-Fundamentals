function inventory(data) {

    let journal = data.shift().split(", ");
    let index = 0;
    let commands = data[index];
    index++;

    while (commands !== "Craft!") {
        let currComands = commands.split(" - ");
        let command = currComands[0];
        let item = currComands[1];

        switch (command) {
            case "Collect":
                if (!journal.includes(item)) {
                    journal.push(item);
                } 
                break;

            case "Drop":
                if (journal.includes(item)) {
                    let indexDrop = journal.indexOf(item);
                    journal.splice(indexDrop, 1);
                }
                break;

            case "Combine Items":
                let items = item.split(":");
                let oldItem = items[0];
                let newItem = items[1];

                if (journal.includes(oldItem)) {
                    let indexCombine = journal.indexOf(oldItem);
                    journal.splice(indexCombine + 1, 0, newItem)
                } 
                break;
            
            case "Renew" :
                if(journal.includes(item)) {
                    let indexRenew = journal.indexOf(item);
                    let element = journal.splice(indexRenew,1);
                    journal.push(element[0]);
                }
                break;
        }

        commands = data[index];
        index++
    }
    console.log(journal.join(", "));

}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]);