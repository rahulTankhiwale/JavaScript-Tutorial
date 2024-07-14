let myname = "Rahul"
let lastname = new String("Tankhiwale")
console.log(myname);
console.log(typeof myname) // string 
console.log(typeof lastname) // object 

// correct ways to use string
console.log(` my name is ${myname} and my surname is ${lastname} `) // $ to access the variable or objecte

//string methods 
console.log(myname.length) //5
console.log(myname.toUpperCase()) //RAHUL
console.log(lastname.toUpperCase()) //TANKHIWALE
console.log(lastname.toLowerCase())//tankhiwale
console.log(myname.charAt(3)) // u
console.log(lastname.indexOf('i')) //5 
console.log(myname.indexOf('l', 3)) // 4

// let str = "   rahul tankhiwale   "
// console.log(str.trim()) 

// let str = "   rahul tankhiwale   ";
// str = str.trim(); // remove leading and trailing spaces
// str = str.split(' ').join(''); // split on spaces and join with an empty string
// console.log(str); // output: "rahultankhiwale"

// let str = "Hello World";

// console.log(str.substring(2, 7)); // "llo W"
// console.log(str.substring(6));    // "World"
// console.log(str.substring(7, 2)); // "llo W" (swapped indices)

let str = "Hello World";

console.log(str.slice(2, 7));   // "llo W"
console.log(str.slice(-5));     // "World" 

// string searching methods
// String indexOf()
// String lastIndexOf()
// String search()

// The search() method returns the position of the first occurrence of a string in a string.
// The position of the first occurrence of "locate" is:
let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate")); //7 