// const person = {
//   name: "vishal",
//   age: 23,
//   loc: {
//     city: "chandigarh",
//     temp: 38,
//   },
// };

// const { name, age } = person;

// const { city, temp } = person.loc;

// console.log(`${name} is ${age}`);
// console.log(`${city} is ${temp}`);

// const book = {
//   title: "ego",
//   author: "vishal",
//   pub: {
//     name: "pingu",
//   },
// };

// const { name: newName = "anon" } = book.pub;
// // console.log(`publisher's name is ${newName}`);

// const add = ["1746", "chd", "india", "160036"];

// const [home, city] = add;

// console.log(`my ${home} and  ${city}`);

const item = ["coffee(hot)", "2$", "250$", "$275"];

const [cof, a, n, price] = item;

console.log(`name=${cof} rate is ${price}`);
