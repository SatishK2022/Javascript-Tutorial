class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}12345.`.toUpperCase();
    }

    set password(newPassword){
        this._password = newPassword
    }

}

const satish = new User('satish@gmail.com', 'abcde');
console.log(satish.password);
console.log(satish.email);