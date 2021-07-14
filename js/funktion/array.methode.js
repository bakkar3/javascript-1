//    Adding New Elements to an
// 1 -a push to add element att the end of an array:
const numbersArray = ["one","towe","three","four"];
  numbersArray.push("five"); //add five at the end
console.log(numbersArray); // the orginal array wird sich gändert
// 1 -b  unshift to add a new element at the beginning of an array:
numbersArray.unshift("zero"); //add  at the beginning
console.log(numbersArray);
// Removing Elements from an Array
// 2 -a pop o remove the last element from an array you can use the pop() method.
const weekDaysArray = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
  weekDaysArray.pop();//remove the last element
console.log(weekDaysArray);
// 2 -b  shift  toremove the first element from an array using the shift() method.
const firstShift = weekDaysArray.shift();//remove the first element
console.log(weekDaysArray);
// ~~**wichtig**~~ Adding or Removing Elements at Any Position
// 3 - The splice() method is a very versatile array method that allows you to add
//or remove elements from any index,
//     using the syntax arr.splice( nummber startIndex, nummber delet parametre, "the adding element")
// 3-a  nur löshen
const exArray = [`wihte`,`black`,`red`,`green`,];
 exArray.splice(1,1); //hier hat er "black grlöscht ,weil wir gesagt haben,dass er von erste position in index
// (index of) anfangen soll und the scond paramieter war wie viele paramieter löshen soll"
console.log(exArray);
// 3 -b  nur add
exArray.splice(1,0,"blue","orange");
console.log(exArray);
// 4-c löschen und add
exArray.splice(0,2,"blue","orange"); //hier fänget von null option an und löscht zwei elemente und danch add"blue" and "orange"
console.log(exArray)
// 4 -a  join es macht ((,) )or (- )or ("") or (" ")) und ändert sich vom array zum srting
const exaArray = [`wihte`,`black`,`red`,`green`,];
const exaJoin = exaArray.join(`-`);
console.log(exaJoin);
// 4-b tostring() ändert sich vom array zum srting
const exToStr = exaArray.toString();
console.log(exToStr);
// 5 - slice() Extracting a Portion of an Array
const infoAarray= ["osama","jamil","al","haj","Abdullah"];
const infoSlice = infoAarray.slice(1,3);
console.log(infoSlice);
// 6 -  concat()    Merging Two or More Arrays
const pets = ["Cat","Dog","Parrot"];
const wilds = ["Tiger","Wolf","Zebra"];
const bugs = ["Ant","Bee"];
const animals = pets.concat(wilds,bugs);
console.log(animals);
// 7 - indexof() or lastindexof() Searching Through an Array
// 7 -a indexof(`name`) or lastindexof()
const fruitsarr = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
console.log(fruitsarr.indexOf(`Orange`));
console.log(fruitsarr.lastIndexOf(`Orange`,-1))
// 7 -b   (welche elememt suchst du ,start of index,)
const arr = [1, 0, 3, 1, false, 5, 1, 4, 7]; // Searching forwards, starting at from- index
console.log(arr.indexOf(false));
// 8 - includes()
const fruitsarrr = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
console.log(fruitsarrr.includes(`Orange`,`Banana`));
console.log(fruitsarrr.includes(`Osama`,`Apple`));