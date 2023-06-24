function rotateArray(arr) {
    let length = arr.length;
    let step = Number(arr[length - 1]);
    arr.pop();
    for (let i = 1; i <= step; i++) {
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(" "))
}

rotateArray(['Banana', 'Orange', 'Coconut',
    'Apple', '15'])