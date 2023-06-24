function login(input) {
    let username = input[0];
    let usernameLenght = `${username.length}`;
    let password = "";
    for (let i = usernameLenght - 1; i >= 0; i--) {
        let pass = username[i];
        password += pass;
    }

    for(let j = 1; j <= input.length; j++) {
        if(password !== input[j]) {
            if(j === 4) {
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log(`Incorrect password. Try again.`)
        }  else {
            console.log(`User ${username} logged in.`);
            return;
        }
    }
    
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);