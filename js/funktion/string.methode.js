//creat a string
// 1 - indexOf
const infoStr = "My bname is Osama an I live  in Berlin";
const indexStr = infoStr.indexOf("I");
const indexStr1 = infoStr.charAt(infoStr.length - 1);
// hier kann ich auch schreiben infostr.indexOf("an",5) und er fänget von 5 an,um (an)zu finden.
//er sucht nach einem wort oder einem Buchtabe Z.B : indexOf("B",5)
console.log(indexStr);
console.log(indexStr1);
//2 - lastIndexOf
const familieStr = "Osama eilla baraa eilla";
const lastIndexStr = familieStr.lastIndexOf("eilla");
// hier kann ich auch schreiben infostr.lastIndexOf("eilla",15) und er fänget von 15 nach 0 an,um (an)zu finden.
console.log(lastIndexStr);
// 3 - search
const donigStr = "I go to  Every school  day and every Week to the Pool";
const searchStr = donigStr.search("Every");
// wenn gibt es zwei Wörte im gleichen Satz und suchen wir nach erstem Wort,
//dann wir sollen das code benutzen : .search(/every/i)
console.log(searchStr);

// 4 - substring slice(start,end) substrig(start,end) von String zum String

const weatherStr = "isTody the weather  very nice";
let weatherSlice0 = weatherStr.slice(5, 16);
let weatherSlice1 = weatherStr.substring(5, 16);
let weatherSlice2 = weatherStr.substr(5, 16);
//Hier können wir auch Negative Zahlen schreiben Z.B.: slice(-28,-5)
// und auch  können wir nur ein Zahl schreiben Z.B.: slice(15) dann er fänget von 15 bis ende
console.log(weatherSlice0);
console.log(weatherSlice1);
console.log(weatherSlice2);
//4 a substr(start,lenght)
const nummber = [4, 1, 2, 3, 5, 8, 7.7, 6, 3, 8, 9, 10];
console.log(nummber.slice(4, 9));
// 5 - replace
const exStr = "How old is he and is He Happy ?!";
const replaceStr = exStr.replace("He", "She");
//wir können das code benutzen unabhängisch vom Größem oder kleinem Buchtabe : .replace(/He/i,"She")
console.log(replaceStr);
// 6 - toUppercase
const halloStr = " Hallo World";
const toUpperCaseStr = halloStr.toLocaleUpperCase();
console.log(toUpperCaseStr);
// 7 - toLowerCase
const hiStr = " HI WORLD";
const toLowerCaseStr = hiStr.toLowerCase();
console.log(toLowerCaseStr);
// 8 - charAt
const abcStr = "a b c d e f";
const charAtStr = abcStr.charAt("6");
// hier sollen wir nur eine Nummer schreiben . Z.B ("c") einen buchtabe können wir nicht schreiben.
console.log(charAtStr);
// 9 - concatenation
// wir köönen zwei strings sammeln in einer neu string
let wishStr = "happy" + ` `;
wishStr += "neu year";
console.log(wishStr);
//oder so schriben
const happyStr = "happy";
const birthStr = "birthday";
const dayStr = happyStr + ` ` + birthStr;
console.log(dayStr);


//  10 - spliting
//(separator ,limit)
const myMainString = "i love javascript ung json";
mySplitString = myMainString.split("-", 3) // [i-love-javascript] verändet von zum Array[]



const friendStr = `ahmad ammar renat heba eliza`;
const friendSplii = friendStr.split(` `); // vom string zum array
console.log(friendSplii);
console.log(friendStr);
//oder wir Können das String zum arry ändern und danch drucken
const friendsStr = `ahmad,ammar,renat,heba,eliza`;
const friendsSpli = friendsStr.split(`,`);
console.log(friendsSpli[4]);
// 11 -lenght of string
const str1 = "This is a paragraph of text.";
console.log(str1.length); // Prints 28
const str2 = "This is a \n paragraph of text.";
console.log(str2.length); // Prints 30, because \n is only one character
// parseflot and parseint
// trim math /round()/ matth ceil() /math flor() /tofixed /nummber/floor / gehört array spread oprator oder arry from
// JavaScript Escape Sequences
// Escape sequences are also useful for situations where you want to use characters that can't be typed using a keyboard. Here are some other most commonly used escape sequences.
//    \n is replaced by the newline character
//    \t is replaced by the tab character
//    \r is replaced by the carriage-return character
//    \b is replaced by the backspace character
//    \\ is replaced by a single backslash (\)
