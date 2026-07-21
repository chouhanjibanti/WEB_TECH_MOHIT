// In the case of Variable
console.log(a);
var a = 10;

// ----> internally JS converted 
var a;
console.log(a);
a = 10;

// -----------------

console.log(b);
let b = 20;
// ReferenceError: Cannot access 'b' before initialization

console.log(c);
const c = 100;
// ReferenceError: Cannot access 'c' before initialization


// ============================================

// In the case of function:- 

// 1.  function declaration -> 

// function Demo(){
//     // statement 
// }
// Demo()

// // 2. function expression
// let Demo = function(){
//     // statement 
// }
// Demo()



// Demo()
// function Demo(){
//     console.log("hy i am function declaration");
// }

// Demo()
let Demo = function(){
    console.log("hy i am function expression");
}
// ReferenceError: Cannot access 'Demo' before initialization
