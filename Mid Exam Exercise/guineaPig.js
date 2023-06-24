function guineaPig(input) {

    let foodQuantity = Number(input.shift()) * 1000;
    let hayQantity = Number(input.shift()) * 1000;
    let coverQuantity = Number(input.shift()) * 1000;
    let weight = Number(input.shift()) * 1000;

    for (let i = 1; i <= 30; i++) {
        foodQuantity -= 300;
        if (i % 2 === 0) {
            hayQantity -= foodQuantity * 0.05;
        }
        if (i % 3 === 0) {
            coverQuantity -= weight / 3;
        }

        if (foodQuantity < 0 || hayQantity < 0 || coverQuantity < 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(2)}, Hay: ${(hayQantity / 1000).toFixed(2)}, Cover: ${(coverQuantity / 1000).toFixed(2)}.`);


}
guineaPig((["1", 
"1.5", 
"3", 
"1.5"
]))