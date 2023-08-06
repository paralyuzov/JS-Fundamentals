function messagesManager(data) {

    let capacity = Number(data.shift());

    let line = data.shift();

    let users = {};


    while (line !== "Statistics") {

        let tokens = line.split("=");
        let command = tokens[0];

        switch (command) {
            case "Add":
                let username = tokens[1];
                let sent = Number(tokens[2]);
                let received = Number(tokens[3]);
                if (!users.hasOwnProperty(username)) {
                    users[username] = {
                        sent,
                        received,
                    }
                }
                break;

            case "Message":
                let sender = tokens[1];
                let reciever = tokens[2];
                if (users.hasOwnProperty(sender) && users.hasOwnProperty(reciever)) {
                    users[sender].sent += 1;
                    users[reciever].received += 1;
                    if ((users[sender].sent + users[sender].received) >= capacity) {
                        console.log(`${sender} reached the capacity!`)
                        delete users[sender];
                    }
                    if ((users[reciever].sent + users[reciever].received) >= capacity) {
                        console.log(`${reciever} reached the capacity!`)
                        delete users[reciever];
                    }
                }
                break;

            case "Empty":
                let user = tokens[1];
                if (user === "All") {
                    users = {};
                } else {
                    if (users.hasOwnProperty(user)) {
                        delete users[user];
                    }
                }
                break;

        }

        line = data.shift();
    }

    let arr = Object.entries(users);
    console.log(`Users count: ${arr.length}`)
    for (let [name, info] of arr) {
        console.log(`${name} - ${info.sent + info.received}`);
    }

}
messagesManager(["12",

    "Add=Bonnie=3=5",

    "Add=Johny=4=4",

    "Empty=All",

    "Add=Bonnie=3=3",
    "Statistics"])