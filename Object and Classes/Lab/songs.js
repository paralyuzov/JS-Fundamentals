function songs(data) {
    class Song {
        constructor(type, name, time) {
            this.type = type,
                this.name = name,
                this.time = time
        }
    }

    let songs = [];
    let numberOfSong = Number(data.shift());
    let typeSong = data.pop();

    for (let i = 0; i < data.length; i++) {
        let [type, name, time] = data[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if(typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtred = songs.filter((i) => i.type === typeSong);
        filtred.forEach((i) => console.log(i.name));
    }

}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
    