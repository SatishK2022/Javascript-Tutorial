class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // `static` keyword prevents the method to access by the object
    static createId(){
        return '123'
    }
}

const satish = new User('Satish')
// console.log(satish.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const spider = new Teacher('Spider', 'spider@spiedrman.com')
spider.logMe()
console.log(spider.createId()); // It will throw an error as the method is static