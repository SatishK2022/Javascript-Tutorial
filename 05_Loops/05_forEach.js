const coding = ["JS", "Java", "Ruby", "Cpp", "Python"]

// coding.forEach(function (element) {
//     console.log(element);
// })

// coding.forEach((element) => {
//     console.log(element);
// })

// function printMe(element){
//     console.log(element);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})