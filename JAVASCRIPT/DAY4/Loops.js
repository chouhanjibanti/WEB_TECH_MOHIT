// console.log("Hello");


// Print Goodmorning 100 time.

// for(let i=1;i<=100;i++){
//     console.log("Goodmorning");
// }


// For Loops Questions // While Loop Questions // Do While Loop Questions


// =========  For Loop ==============
// 1. print sum of the number from 1 to 5.
// 2. Print the multiplication table of a number m using a for loop.
// 3. Print all even numbers from 1 to 50 using a for loop.
// 4. Print all odd numbers between 1 and 100 using a for loop.
// 5. Print all numbers from 1 to 200 that are divisible by both 3 and 5 using a for loop..
// 6. Calculate the product of all even numbers between 1 and 100 using a for loop.
// 7. Calculate the sum of the digits of a number using a for loop, where the number is provided by the user. - while 
// 8. Generate the first n Fibonacci numbers using a r loop, where n is provided by the user.
// 9. Print numbers from 10 to 1 using a for loop.
// 10.Print the factorial of a number using a loop for loop.-> 5 
// 11. Print all odd numbers between 1 and 70.
// 12. Print the sum of even number between 1 to 30.




// =============   While Loop ================
//1. extract the digit from the number 5435.
//2. sum of all the digits where number is 34567.
//3. square of all the digits and sum this and display the number. 
//4. Find the largest digit in a given number using a while loop.  input number =  45732
//5. Count the number of digits in a number using a while loop. input number = 34543
//6. Calculate the factorial of a number using a while loop. input number = 10




// Basic Question -> for loop , while loop 
// 1. prime number // 2 , 3  , 5 , 7, 11 ,13 , 17
// 2. Armstrong number // 153  1*1*1 = 1   5*5*5 = 125  3*3*3 = 1+125+27 = 153
// 3. perfect number // 6 -> 1 +2+3 = 6  =>  14 -> 1+2+7 => 10 => 28 -> 1+2+4+7+14= 28
// 4. neon number 9  -> 9*9 -> 81  -> 8+1 = 9
// 5. Strong number    145 -> 1! =1    4!= 24 5!=120 => 1+24+120 => 145
// 6. Write a program to check if a given number is a palindrome.
// ===========================================


// 1. print sum of the number from 1 to 5.
// let sum = 0;
// for(let i=1;i<=5;i++){ //i=1 // i=2
//     sum = sum+i; // sum = 1 || sum =3
// }
// console.log(sum);

// 2. Print Multiplication 
// let num = 6;
// for(let i=1;i<=10;i++){
//     console.log(num*i);
// }


// 6. Calculate the product of all even numbers between 1 and 100 using a for loop.

// let pro = 1;
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         pro = pro *i;
//     }
// }
// console.log(pro);


// 10.Print the factorial of a number using a loop for loop.-> 5 
// let num = 5;
// let fact = 1;
// for(let i=1;i<=num;i++){
//     fact = fact*i;
// }
// console.log(fact);


// 8. Generate the first n Fibonacci numbers using a r loop, where n is provided by the user.
// 0 1 1 2 3 5 8 13
// let a = 0;
// let b = 1;
// let c = 0;

// for(let i=1;i<=8;i++){
//     console.log(a);// 0  // 1 // 1
//     c = a+b;// c=1 // c=2  // c= 
//     a = b; // a = 1 // a= 1
//     b = c; // b =1 // b= 2
  
// }


//1. extract the digit from the number 5435.
let num = 5435;
while(num>0){ // 5435>0 // 543>0 // 54>0 // 5>0 // 0>0 False
   let digit = num%10; // 5435%10 =5 // 543%10=3 // 54%10 = 4 // 5%10=5
   console.log(digit); // 5 // 3 // 4 // 5
   num = Math.floor((num/10));// 5435/10 => 543 || 543/10= 54 // 54/10=5 // 5/10=0
}