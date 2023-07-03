function meetings(data) {
    let meetingList = {};
    for (let line of data) {
        let [day, name] = line.split(" ");
        if (meetingList.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetingList[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }

    for (let key in meetingList) {
        console.log(`${key} -> ${meetingList[key]}`)
    }
}
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']

)