// Previously we use bluebird and Q library for using promise but after ES6 we get it by default.

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB call, cryptography, network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise Consumed');
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(() => {
    console.log('Async 2 Resolved');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Satish", email: "satish@gmail.com" })
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Satish", password: "1234" })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Promise is either resolved or rejected');
    })


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Javascript", password: "1234" })
        } else {
            reject('Error: Javascript went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))