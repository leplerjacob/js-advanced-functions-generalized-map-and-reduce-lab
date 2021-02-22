// Add your functions here
// function map(srcArray){
//     return srcArray.map(num => {
//         -num;
//     })
// }

function map(array, func) {
    let r  = [];

    array.forEach(el => {
        r.push(func(el))
    })
    return r
}

// const numbers = [1,-1,2,3];

// let sum = 0;
// for (let n of numbers)
//     sum += n;

//     console.log(sum);

// numbers.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

function reduce(sourceObj, callback, startWithThisValue){
    // initialize two variables to store values. 'initialValue' will be either set to what is given ('startWithThisValue'), or if not given, will start at the first index value
    let initialValue = !!startWithThisValue ? startWithThisValue : sourceObj[0];
    let initialIndex = !!startWithThisValue ? 0 : 1;

    for (; initialIndex < sourceObj.length; initialIndex++) {
        initialValue = callback(sourceObj[initialIndex], initialValue)
    }

    return initialValue;
}

const array = [1,3,5,7];

let something;
const sum = array.reduce((acc, curr) => {
    return acc + curr;
})

console.log(sum)


