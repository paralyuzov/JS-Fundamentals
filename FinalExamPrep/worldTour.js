function worldTour(data) {
    let stops = data.shift();
    let line = data.shift();
    while (line !== "Travel") {
        let tokens = line.split(":");

        switch (tokens[0]) {
            case "Add Stop":
                let addIndex = Number(tokens[1]);
                let str = tokens[2];
                if (addIndex < 0 || addIndex >= stops.length) {
                    console.log(stops)
                    break;

                }
                let firstPart = stops.slice(0, addIndex);
                let secondPart = stops.slice(addIndex);
                stops = firstPart + str + secondPart;
                console.log(stops)
                break;
            case "Remove Stop":
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                if (!stops[startIndex] || !stops[endIndex]) {
                    console.log(stops);
                    break;

                }
                let subStr = stops.substring(startIndex, endIndex + 1);
                stops = stops.replace(subStr, "");
                console.log(stops)

                break;
            case "Switch":
                let oldString = tokens[1];
                let newString = tokens[2];
                let pattern = new RegExp(oldString, "g");
                stops = stops.replace(pattern, newString);
                console.log(stops);
                break;

        }

        line = data.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)

}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))