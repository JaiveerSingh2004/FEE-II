// person1 is a prototype 

const person1 = {
    name : "kartik" , 
    age : 25 ,
    designation : "developer"
};

console.log(person1);

const person2 = Object.create(person1);
const person3 = Object.create(person2);
console.log(person2);
console.log(person3);
console.log(person3.name);

person2.name = "vivek";
console.log(person2.name);
console.log(person2);
console.log(person3); // empty 
console.log(person3.name); // vivek

console.log(person2.__proto__ == person1); // true 
console.log(person1.__proto__ == Object.prototype); // true 
console.log(person1.__proto__ == Object.prototype); // true 
console.log(Object.prototype.__proto__); // null

// parent ---- children
//         |
//     _proto_

// data types
//  number , array , string , functions => object 

console.log(person3);
console.log (person2.hasOwnProperty("name")) 
console.log (person3.hasOwnProperty("name")) // false kyuki eh alg toh ni bnaya
console.log(person1.hasOwnProperty("name"))

const num = 10
console.log(num.__proto__ == Number.prototype)

const arr = [1, 2, 3, 4]
console.log(arr.__proto__ == Array.prototype)


