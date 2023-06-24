function ages(age) {
    let person = "";
    if (age <= 2 && age >= 0) {
        person = "baby";
    } else if (age <= 13 && age >= 3) {
        person = "child";
    } else if (age <= 19 && age >= 14) {
        person = "teenager";
    } else if (age <= 65 && age >= 20) {
        person = "adult";
    } else if (age >= 66) {
        person = "elder";
    } else {
        person = "out of bounds";
    }
    console.log(person);

}
ages(-2);