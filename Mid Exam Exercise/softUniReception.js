function softUniReception(data) {
    let firstEfficiency = Number(data.shift());
    let secondEfficiency = Number(data.shift());
    let thirdEfficiency = Number(data.shift());
    let students = Number(data.shift());

    let efficiency = firstEfficiency + secondEfficiency + thirdEfficiency;

    let hours = 0;

    while(students > 0) {
        hours++;
        if(hours % 4 === 0) {
            continue;
        }

        students -= efficiency;
    }

    console.log(`Time needed: ${hours}h.`)

}
softUniReception(['1','2','3','45'])