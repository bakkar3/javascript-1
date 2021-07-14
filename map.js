// map //
// nimmt ein Array und gibt ein newe Array in gleise Zahl von items zurück

//  map

// const nums = [2, 2, 3, 4, 9];
// let sqer = nums.map((num) => {
//   return num ** 2;
// console.log(sqer);
// });
const nums = [2, 2, 3, 4, 9];
let sqer = nums.map((num) => num ** 2);
console.log(sqer);

// for of
let sqer1 = []; // [1,4,6,...] möglish
for (const num of nums) {
  sqer1.push(num ** 2);
}
console.log(sqer1);
