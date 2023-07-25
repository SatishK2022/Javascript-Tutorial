function SetUsername(username) {
    // Complex DB Calls
    this.username = username
}

function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const user = new createUser('Satish', 'satish@gmail.com', '12345')
console.log(user);