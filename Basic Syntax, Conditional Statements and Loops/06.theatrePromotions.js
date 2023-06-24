function theatre(day, age) {
    let money = 0;
    if (age < 0 || age > 122) {
        console.log(`Error!`);
        return;
    }
    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                money = 12;
            } else if (age > 18 && age <= 64) {
                money = 18;
            } else if (age > 64 && age <= 122) {
                money = 12;
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                money = 15;
            } else if (age > 18 && age <= 64) {
                money = 20;
            } else if (age > 64 && age <= 122) {
                money = 15;
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                money = 5;
            } else if (age > 18 && age <= 64) {
                money = 12;
            } else if (age > 64 && age <= 122) {
                money = 10;
            }
            break;
    }
    console.log(`${money}$`)

}
theatre('Holiday', 15)