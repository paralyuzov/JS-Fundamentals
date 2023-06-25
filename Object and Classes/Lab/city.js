function city(obj) {

    let entries = Object.entries(obj);

    for (let [keys, value] of entries) {

        console.log(`${keys} -> ${value}`)
    }

}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})