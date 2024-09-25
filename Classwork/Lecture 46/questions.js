// * create a array with a name cart with products (name,price, qty).
// Calculate the price of the all the product that we have added in the cart.

var cart = [
  { id: 1, name: "iphone 16", price: 164000, qty: 1 },
  { id: 2, name: "iphone 15", price: 84000, qty: 1 },
]

let total = cart.reduce(function (sum, item) {
  return sum + item.price * item.qty;
}, 0)

console.log(total);

// * write a function to filter out all the perfect square from given list
// of number:

// eg: [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];
// ans: [1,4,9,16,36,49]

let obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 18, 20, 36, 40, 49];
let perfectSquare = obj.filter((num) => {
  return Math.sqrt(num) % 1 === 0;
})
console.log(perfectSquare)

// * user = ['Amit', 'Ajay','Mukesh'];


const users = ["Amit", "Ajay", "Mukesh"];

function getUserWithRandomRewards(users) {
  return users.map(function (user, idx) {
    return {
      id: idx + 1,
      name: user,
      rewards: Math.floor(Math.random() * 10 + 1),
    };
  });
}

const userList = getUserWithRandomRewards(users);
console.log(users);
console.log(userList);

// * Find the veg menu list:
const menu = [
  "Kadai Paneer",
  "Dal Makhni",
  "Masala Dosa",
  "Chicken Soup",
  "Chicken Butter Masala",
  "Veg Chowmein",
  "Egg Curry",
  "Egg Maggie",
  "Chicken Fry",
  "Chicken Biryani",
  "Khichdi",
  "Handi Paneer",
  "Onion Paratha",
  "Garlic Naan",
  "Onion Pizza",
  "Garlic Bread",
  "Onion Rings",
  "Chilli Paneer",
]

function findVegMenu(menu) {
  const nonVegKeywords = ["Chicken", "Egg"]
  return menu.filter((item) => {
    return !nonVegKeywords.some((word) => item.includes(word))
  })
}
