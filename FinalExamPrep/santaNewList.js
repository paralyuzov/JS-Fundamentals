function santaNewList(data) {

    let children = {};
    let presents = {};
    let line = data.shift();
    
    while (line !== "END") {

        let tokens = line.split("->");
        let name = tokens[0];
        let type = tokens[1];
        let amount = Number(tokens[2]);
        if (name === "Remove") {
            if (children.hasOwnProperty(type)) {
                delete children[type];
                line = data.shift();
                continue;
            } else {
                line = data.shift();
                continue;
            }

        }
        if (!children.hasOwnProperty(name)) {
            children[name] = 0;
        }
        children[name] += amount;
        if (!presents.hasOwnProperty(type)) {
            presents[type] = 0;
        }
        presents[type] += amount;


        line = data.shift();
    }

    console.log(`Children:`);
    let sortChildren = Object.entries(children).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (let [name, info] of sortChildren) {
        console.log(`${name} -> ${info}`);
    }
    console.log(`Presents:`)
    for (let [toy, info] of Object.entries(presents)) {
        console.log(`${toy} -> ${info}`);
    }

}
santaNewList(["Teddy->Clothes->8",
    "Johny->Toys->10",
    "Freddie->Candy->30",
    "Johny->Candy->20",
    "Carrie->Phone->1",
    "Carrie->Tablet->1",
    "Carrie->Candy->10",
    "Teddy->Toys->5",
    "Remove->Teddys",
    "END"])