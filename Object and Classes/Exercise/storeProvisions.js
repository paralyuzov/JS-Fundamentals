function storeProvision(stock, ordered) {

    let localStorage = {};
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);
        localStorage[product] = quantity;
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let product = ordered[i];
        let quantity = Number(ordered[i + 1])
        if (!localStorage.hasOwnProperty(product)) {
            localStorage[product] = 0;
        }
        localStorage[product] += quantity

    }

    for (const product in localStorage) {

        console.log(`${product} -> ${localStorage[product]}`)

    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30']
)