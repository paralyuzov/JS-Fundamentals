function towns(data) {

    for (let i = 0; i < data.length; i++) {
        let [town, latitude, longitude] = data[i].split(" | ");
        let currTown = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(currTown)

    }

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);