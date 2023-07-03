function companyUsers(data) {
    let map = new Map();

    for(let line of data) {
        let [name,id] = line.split(" -> ");
        if(!map.has(name)){
            map.set(name,new Set())
        }
        map.get(name).add(id);

    }
    
    let arr = Array.from(map).sort((a,b) => a[0].localeCompare(b[0]));;
    
    for(let line of arr) {
        let name = line[0];
        let idArr = Array.from(line[1]);
        console.log(name)
        idArr.forEach(element => console.log(`-- ${element}`))
    }
    


}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
)