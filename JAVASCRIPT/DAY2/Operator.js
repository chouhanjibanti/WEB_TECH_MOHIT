// -> Arithmetic operator  + , - , * , / , %
// -> Assignment Operator  -> a = a+10; => a+=10
// -> Relational Operator  -> > , < , >= , <= 
// -> Logical Operator  -> AND , OR , NOT 
// -> Comparison Operator -> == , ===
// -> Ternary Operator
// -> Increment / Decrement Operator 


// Arithmetic :- 
// let a = 10;
// let b = 20;
// let c = 30;
// console.log(a+b);//30
// console.log(b-a);//10
// console.log(b*c);//600
// console.log(c/a);// 3
// console.log(c%a);// 0 

// ====================================
// // Assignment Operator
// let a = 10;
// let b = 20;
// let c = 30;

// // c = c+b;
// c += b;
// console.log(c);
// ===========================================
// Relational Operator 
// let a = 10;
// let b = 20;
// let c = 30;

// console.log(a>b)// F
// console.log(c<b);// F
// console.log(c>=a);//T
// ========================================


// Logical Operator AND , OR ,NOT 
// AND ->  &&  ->  If we have conditions so all conditions are satisfied. -> TRUE
// OR -> ||  ->  If we have conditions so any one condition is true it will return->  true
// NOT -> ! -> true -> false  -> false -> true 

// let a = 10;
// let b = 20;
// let c = 30;

// console.log(a>b && c > b);// False
// console.log(b<c || c>=a);// True 

// console.log(a!=b); // 10 != 20


// ===================================================

// == and ===  

//  == :- it will check only the value 
// === : It will check value as well as Datatype.

let a = 10;
let b= 20;
let c = '10';

console.log(a == c); // True
console.log(a === c);// False
