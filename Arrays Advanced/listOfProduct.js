function listOfProduct(arr) {
    
    let sorted = arr.sort();
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listOfProduct(['Potatoes', 'Tomatoes', 'Onions',
    'Apples']
)