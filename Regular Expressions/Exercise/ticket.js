function ticket(data) {
    let pattern = /([@#$\^]{6,10})/gm
    let line = pattern.exec(data);
    while (line !== null) {
        console.log(line)
        line = pattern.exec(data);
    }


}
ticket("$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo @@@@@@ey")