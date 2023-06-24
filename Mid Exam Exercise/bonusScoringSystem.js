function bonusScoringSystem(input) {

    let students = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let additionalBonus = Number(input.shift());

   
    let maxBonus = 0;
    let bestAttendance = 0;

    for(let i = 0; i < students; i++) {

        let attendance = Number(input[i]);
        let bonus = attendance / lecturesCount * (5 + additionalBonus);
        if(bonus > maxBonus) {
            maxBonus = bonus;
            bestAttendance = attendance;
        }
    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${Math.round(bestAttendance)} lectures.`);


}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])