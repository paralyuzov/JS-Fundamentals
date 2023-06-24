function carWash(arr) {
    let output = 0;
    for (const value of arr) {
        switch (value) {
            case "soap": output += 10; break;
            case "water": output *= 1.20; break;
            case "vacuum cleaner": output *= 1.25; break;
            case "mud": output *= 0.90; break;
        }

    }
    return `The car is ${output.toFixed(2)}% clean.`
}
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud",
"vacuum cleaner"])
);