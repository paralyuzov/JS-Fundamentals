function blackFlag(data) {

    let daysPlunder = Number(data.shift());
    let dailyPlunder = Number(data.shift());
    let expectedPlunder = Number(data.shift());

    let sum = 0;

    for(let i = 1; i <= daysPlunder; i++) {

        if(i % 3 === 0) {
            sum += dailyPlunder * 1.50;
        } else {
            sum += dailyPlunder;
        }

        if(i % 5 === 0) {
            sum *= 0.70;
        }

    }

    if(sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`)
    } else {
        let percent = (sum / expectedPlunder) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }


}
blackFlag((["10",
"20",
"380"]))