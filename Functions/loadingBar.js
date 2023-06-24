function loadingBar(num) {
    let percent = num / 10;
    let dots = 10 - percent;

    if (percent === 10) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${num}% [${"%".repeat(percent)}${".".repeat(dots)}]`);
        console.log(`Still loading...`)
    }

}
loadingBar(87);