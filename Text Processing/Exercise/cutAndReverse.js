function cutAndReverse(string) {

    let firstString = string.substring(0, string.length / 2);
    let secondString = string.substring(string.length / 2);

    let firstReverse = firstString.split("").reverse().join("");
    let secondReverse = secondString.split("").reverse().join("");
    console.log(firstReverse);
    console.log(secondReverse);

}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')