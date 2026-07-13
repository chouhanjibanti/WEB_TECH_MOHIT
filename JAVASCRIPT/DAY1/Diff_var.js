// Diff between var , let and const.
// 1. var scope is functional scope .
// 1. let scope is block scope.
// 1. const scope is block scope.

// 2. In var declaration is poss.
// 2. In let declaration is poss.
// 2. In const declaration is not poss.

// 3. In var Reinit is poss.
// 3. In let Reinit is poss.
// 3. In const reinit is not poss.

// 4. In var Redecla is poss.
// 4. In let redecla is not poss.
// 4. In const redecla is not poss.


// function Demo(){
//     var a = 10;
//     console.log(a);
//     if(true){
//         console.log(a);
//     }
// }
// Demo()
// console.log(a);


// if(true){
//     let b = 20;
//     console.log(b);
// }
// console.log(b);


// if(true){
//     const c = 30;
//     console.log(c);
// }
// console.log(c);


// ==============================

// var a;
// let b;
// const c ;


// ==================================


// var a= 10;
// a = 20;
// console.log(a);

// let b= 30;
// b = 100;
// console.log(b);


// const c = 100;
// c = 200;
// console.log(c);

// ==========================================


// var a = 10;
// var a = 20;
// console.log(a);


// let b = 20;
// let b = 30;
// console.log(b);


// const c = 20;
// const c = 100;
// console.log(c);