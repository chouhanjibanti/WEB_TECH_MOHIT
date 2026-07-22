// function declaration
// Syntax :- 
// function funName(a,b){ // a and b are parameters
//     // statement
// }
// funName(10,20)// arguments4

// 1. implicit function
// 2. explicit function

// function Add(a,b){
//     console.log(a+b);
// }
// Add(10,20)


// function Add(a,b){
//     return a+b;
// }
// console.log(Add(10,20));


// WAP factorial using the function declaration.

// function Fact(n){
//     let fact=1
//     for(let i=1;i<=n;i++){
//        fact= fact*i;
//     }
//     console.log(fact);
// }
// Fact(5)


// =============================================

// function expression :- 

// let Sub = function(a,b){
//     console.log(a-b);
// }
// Sub(20,10)

// Check number is perfact or not using the function expression.
// ==========================================

// Arrow function:- It will reduce the line of code .

// Syntax :- 

// let/const funName = () =>{

// }


// let Addition = (a,b,c) =>{
//    console.log(a+b+c);
// }
// Addition(10,20,30)

// Number is prime or not using the Arrow function.
// Number is Armstrong  or not using the Arrow function

// ===========================================

//  Nested function :- function inside function is known as nested function.

// function Parent(){
//     console.log("hy i am parent function");

//     let Child = function(){
//         console.log("Hy i am child function");
//     }
    
//     const Child1 = () =>{
//         return "Hy I am Child1 function"
//     }
//     Child()
//     console.log(Child1());
// }
// Parent()

// ===============================================

// Higher order function :- Higher order function is a function which accept function as an argument.


// Call Back Function :- Call Back function is a function who passed as a paramater.

// function Parent(cbf){ // HOF
//   console.log("hy i am parent function");
//   cbf();
// }
// function Child(){
//   console.log("hy i am child function");
// }
// Parent(Child)


// function MultipleGreet(n,cbf){
//    for(let i=1;i<=n;i++){
//       cbf();
//    }
// }
// function greet(){
//     console.log("Goodmorning");
// }
// MultipleGreet(100,greet)
