
function flightSchedule(data) {
    let flights = {};
    data[0].forEach(element => {
        let [number, destination] = element.split(" ");
        flights[number] = {
            Destination: destination,
            Status: "Ready to fly"
        }
    });

    data[1].forEach(element => {
        let [number, status] = element.split(" ");
        if (flights.hasOwnProperty(number)) {
            flights[number].Status = status;
        }
        
    })

    let checkStatus = data[2].toString();
    for (let fly in flights) {
        if (flights[fly].Status === checkStatus) {
            console.log(flights[fly])
        }
    }

}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]

)