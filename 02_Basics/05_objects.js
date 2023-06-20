const course = {
    courseName: "Chai aur Javascript",
    price: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // Destructuring an Object
console.log(instructor);