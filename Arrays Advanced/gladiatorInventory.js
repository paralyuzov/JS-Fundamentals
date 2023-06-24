function gladiatorInventory(data) {
    let inventory = data[0].split(" ");
    for (let i = 1; i < data.length; i++) {
        let currCommand = data[i].split(" ");
        let command = currCommand[0];

        switch (command) {
            case "Buy":
                let buyItem = currCommand[1];
                if (!inventory.includes(buyItem)) {
                    inventory.push(buyItem);
                }
                break;
            case "Trash":
                let trashItem = currCommand[1];
                if (inventory.includes(trashItem)) {
                    let indexTrash = inventory.indexOf(trashItem);
                    inventory.splice(indexTrash, 1);
                }
                break;
            case "Repair":
                let repairItem = currCommand[1];
                if (inventory.includes(repairItem)) {
                    let indexRepair = inventory.indexOf(repairItem);
                    let itemTaken = inventory.splice(indexRepair, 1);
                    inventory.push(itemTaken[0]);
                }
                break;
            case "Upgrade":
                let upgradeItem = currCommand[1].split("-");
                let currItem = upgradeItem[0];
                let upgradeEquipment = upgradeItem[1];;
                if (inventory.includes(currItem)) {
                    let indexUpgrade = inventory.indexOf(currItem);
                    inventory.splice(indexUpgrade + 1, 0, `${currItem}:${upgradeEquipment}`);

                }
                break;

        }
    }
    console.log(inventory.join(" "));

}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])