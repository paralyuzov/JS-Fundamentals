function burgerBus(data) {

    let cities = Number(data.shift());
    let profit = 0;
    let totalMoney = 0;
    let temp = 0
   
    for(let i = 1; i <= cities; i++) {
        let city = data.shift();
        let income = Number(data.shift());
        let expenses = Number(data.shift());
        if(i % 3 === 0) {
            temp = expenses
            expenses *= 1.50;
            if(i % 5 === 0) {
                expenses = temp
            }
            
        }
        
        if(i % 5 === 0) {
            income *= 0.90;
        }
        
        profit = income - expenses;
        totalMoney += profit;
        
        
        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`)
    }
    console.log(`Burger Bus total profit: ${totalMoney.toFixed(2)} leva.`)
    

}
burgerBus((["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"]))