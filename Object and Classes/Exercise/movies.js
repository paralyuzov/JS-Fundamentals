function movies(data) {

    let moviesData = [];

    data.forEach(element => {

        if (element.includes("addMovie")) {
            let name = element.split("addMovie ")[1];
            moviesData.push({ name });
        } else if (element.includes("directedBy")) {
            let [name, director] = element.split(" directedBy ");
            let movie = moviesData.find(x => x.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (element.includes("onDate")) {
            let [name, date] = element.split(" onDate ");

            let movie = moviesData.find(x => x.name === name);
            if (movie) {
                movie.date = date;
            }
        }

    });

    moviesData.forEach(movie => {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
        
    })



}
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    
)