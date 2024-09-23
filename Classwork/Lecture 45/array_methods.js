//  map ,filter ,reduce and sort

// 1. map :
// A) turn the array values to uppercase and print a new array:
let arr = ['diljit dosanjh' , 'arjan dhillon' , 'nimrat khaira' , 'sonam bajwa', 'kaka'];
let new_arr = arr.map(name => name.toUpperCase());
console.log(new_arr);

// B) Cube of a number
// let num = [1, 2, 3, 4, 5];

// function cube(num) {
//     return num ** 3;
// }

// console.log(num.map(cube))


// By making a function
// let nameArr = ['diljit dosanjh' , 'arjan dhillon' , 'nimrat khaira' , 'sonam bajwa', 'kaka']

// function toUpper(nameArr){
//     return nameArr.toUpperCase();
// }

// console.log(nameArr.map(toUpper))

// -------------------------------------Filter------------------------------------

const num = [1, 2, 34, 53, 24, 56]

function isEven(num) {
    if(num % 2 == 0) {
        return true;
    }
    return false;
}

const evenNum = num.filter(function (num){
    if(num % 2 == 0) {
        return true;
    }

    return false;
})