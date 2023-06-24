function distenceBetweenTwoPoints(x1,y1,x2,y2) {
    let x = x2-x1;
    let y = y2-y1;
    let distance = Math.sqrt((Math.pow(x,2)) + (Math.pow(y,2)))
    console.log(distance)
}
distenceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985);


// d = √(x2 - x1)2 + (y2 - y1)2