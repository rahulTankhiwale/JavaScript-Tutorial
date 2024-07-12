// basics/variable.js

const accountID = 123; 
let accountEmail = "rahul@123";
var password = 123;

let city

//console.log("Account ID:", accountID);
//console.log("Account Email:", accountEmail);
//console.log("Password:", password);

console.table([
    { accountID: accountID, accountEmail: accountEmail, password: password ,city}
  ]);


  /* 
1 Scope:
var is function-scoped.
let and const are block-scoped.

2 Hoisting:
var is hoisted and initialized with undefined.
let and const are hoisted but not initialized.

3 Re-declaration:
var can be re-declared within the same scope.
let and const cannot be re-declared within the same scope.

4 Mutability:
var and let variables can be updated.
const variables cannot be updated through reassignment, but objects and arrays declared with const can have their contents modified.*/