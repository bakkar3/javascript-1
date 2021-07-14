let arr = [3, 5, 1];
console.log(Math.max());  // -Infinity
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr));// 5 

// how string are similer of arrays
// 1-spread operator
// 2- length
// 3- for (const item of object) {
 	
// }
const tip = "i like the arrow funktion weil it dosent change the 'this'variabel."
console.log(...tip);
const tipLetterArr = tip.split("")
console.log( tipLetterArr.length);
for (const  letter of tip) {
	 console.log(letter);
}
for (const letter of tipLetterArr) {
	// console.log(tipLetterArr);
}
// console.log(tipLetterArr);

const car = {
	marke: "mazda",
	year: 1983,
	condition: "poor"
	<style></style>
};
console.log(car);
// console.log(...car);  // nicht möglich  
console.log({...car});
console.log(...Object.keys(car));
console.log(...Object.values(car));
console.log(...Object.entries(car));
const car2 = car;
car.year = 1990;
console.log(car, car2);