function buildWall(arr) {
    let data = arr.map(Number);

    let concratePerDay = 195;
    let sum = 0;
    let output = [];

    for (let i = 0; i < data.length; i++) {
        let crew = data[i];
        for (let j = crew; j <= 30; j++) {
            output.push(sum);
            sum = 0;
            for (let k = 0; k < data.length; k++) {

                if (data[k] >= 30) {
                    continue;
                }

                sum += concratePerDay
                data[k]++;
                crew = data[k]
            }
        }
    }

    let pesos = 0;
    let filtred = output.filter(x => x > 0)
    console.log(filtred.join(", "));
    for (const el of filtred) {
        pesos += el * 1900;

    }
    console.log(`${pesos} pesos`)

}
buildWall([21, 25, 28]);