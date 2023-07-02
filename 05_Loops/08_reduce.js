const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 3999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Android Dev",
        price: 9999
    },
    {
        itemName: "Data Science",
        price: 3999
    }
]

const TotalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(TotalPrice);