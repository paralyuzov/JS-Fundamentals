function softUniBarIncome(data) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;
    let index = 0;

    let result = 0;
    while (data[index] !== 'end of shift') {
        let line = data[index];
        let match = [...line.matchAll(pattern)];

        for (const el of match) {
            let prices = Number(el.groups.quantity) * Number(el.groups.price);

            result += prices;
            console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);
        }

        index++;

    }

    console.log(`Total income: ${result.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)