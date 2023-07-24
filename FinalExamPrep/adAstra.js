function adAstra(data) {
    let pattern = /([\|#])(?<name>[A-Z a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;
    let exec = pattern.exec(data);

    let totalkCal = 0;
    let productStore = [];
    while (exec) {
        let name = exec.groups['name'];
        let date = exec.groups['date'];
        let kcal = exec.groups['kcal'];

        totalkCal += Number(kcal);
        let currentProduct = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`
        productStore.push(currentProduct);
        exec = pattern.exec(data);

    }

    let days = Math.floor(totalkCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    productStore.forEach(x => console.log(x));

}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
)