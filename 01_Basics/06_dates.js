const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Sat Jun 17 2023
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString()); // 17/6/2023, 3:15:20 pm
// console.log(myDate.toLocaleTimeString()); // 3:15:20 pm

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 12) // month starts from 0 as january
// let myCreatedDate = new Date(2023, 0, 12, 4, 5, 6)
// let myCreatedDate = new Date("2004-02-03")
let myCreatedDate = new Date("02-03-2004")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // Time in seconds

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());

newDate.toLocaleString('default', {
    weekday: "short"
})