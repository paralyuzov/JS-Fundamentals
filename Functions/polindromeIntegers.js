function polindromInteger(arr) {
    let length = arr.length;

    for(let i = 0; i < length; i++) {
        let reverseNum = "";
        let currNum = arr[i].toString();

        for(let j = currNum.length -1 ; j >= 0; j--) {
            let digit = currNum[j];
            reverseNum += digit
        }

        if(reverseNum === currNum) {
            console.log(true);
        } else {
            console.log(false);
        }
       
    }
}
polindromInteger([32,2,232,1010])