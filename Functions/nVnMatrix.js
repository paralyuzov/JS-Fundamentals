function matrix(n) {
    
    function rowGenerator() {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += `${n} `;
        }
        return row;
    }

    for (let i = 0; i < n; i++) {
        console.log(rowGenerator())
    }

}
matrix(3)
