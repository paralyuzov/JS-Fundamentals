function rounding(num1, num2) {
    let a = Number(num1);
    let b = Number(num2);
    if (b > 15) {
        b = 15
    }
    a = a.toFixed(b);
    console.log(parseFloat(a))
}
rounding(3.141592653589793238426433832795, 2
)