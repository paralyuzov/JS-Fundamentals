function sortArrayTwoCretiria(arr) {

    let sorted = arr.sort((a,b)=>{
        if(a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b)
    })
    console.log(sorted.join("\n"))

}
sortArrayTwoCretiria(['alpha',
'beta',
'gamma']
)