function tseamAccount(arr) {
    let games = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i].split(' ');
        let command = currElement[0];
        let game = currElement[1];

        if (command === "Play!") {
            break;
        }

        if (command === "Install" && games.includes(game) === false) {

            games.push(game);

        } else if (command === "Uninstall" && games.includes(game)) {

            let index = games.indexOf(game);
            games.splice(index, 1);

        } else if (command === "Update" && games.includes(game)) {

            let index = games.indexOf(game);
            games.splice(index, 1);
            games.push(game);

        } else if (command === "Expansion") {

            let expansion = game.split('-');
            let eXgame = expansion[0];

            if (games.includes(game)) {
                let expandedGame = expansion.join(':');
                let index = games.indexOf(eXgame);
                games.splice(index + 1, 0, expandedGame);
            }

        }

    }
    console.log(games.join(' '));



}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])