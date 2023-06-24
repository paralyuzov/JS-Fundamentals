function vacation(group, type, day) {
    let price = 0;
    let groupOfPeople = Number(group);
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            break;

        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            break;

        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            break;

    }
    let totalPrice = groupOfPeople * price;
    if (type === 'Students' && groupOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (type === 'Business' && groupOfPeople >= 100) {
        totalPrice = totalPrice - (10 * price);
    } else if (type === 'Regular' && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday")