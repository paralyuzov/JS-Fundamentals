function storage(data) {
    let map = new Map();
    for (let line of data) {
        let tokens = line.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currProduct = map.get(product);
            let newQnty = currProduct += quantity;
            map.set(product, newQnty);
        }
    }

    for (let line of map) {
        let product = line[0];
        let qnty = line[1];
        console.log(`${product} -> ${qnty}`);
    }

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)