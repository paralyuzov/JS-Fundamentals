function race(data) {
    let listPeople = data.shift().split(", ");
    let obj = {};
    for (let person of listPeople) {
        obj[person] = 0;
    }
    let currentLine = data.shift();
    let wordPattern = /[A-Za-z]/g;
    let digitPattern = /[0-9]/g;

    while (currentLine !== "end of race") {
        let curName = currentLine.match(wordPattern).join("");
        let distance = currentLine.match(digitPattern).map(x => Number(x));
        let currDistance = 0;
        distance.map(x => currDistance += x);

        if (obj.hasOwnProperty(curName)) {
            obj[curName] += currDistance;
        }

        currentLine = data.shift();
    }

    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${arr[0][0]}`);
    console.log(`2nd place: ${arr[1][0]}`);
    console.log(`3rd place: ${arr[2][0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])