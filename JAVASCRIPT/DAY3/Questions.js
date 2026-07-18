
// 1)WAP TO SWAP TWO VARIABLE WITH USING THIRD VARIABLE? 
// 2)WAP TO SWAP TWO VARIABLES WITHOUT USING THIRD VARIABLE ? 
// 3)WAP TO PRINT LARGEST OF TWO NUMBERS WITH THE HELP OF CONDITIONAL OPERATOR ? 
// 4)WAP TO CHECK GIVEN NUMBER IS EVEN OR ODD ?
// 5)WAP TO CHECK WHETHER GIVEN NUMBER IS DIVISABL BY 7 OR NOT ?
// 6)Check the Number it is leap year or not?

// IF-ELSE:
// 1. WAP TO CHECK SMALLEST OF TWO NUMBERS ?

// SWITCH CASE :- 
// 1)WAP TO PRINT DAY NAME BY READING THE NUMBER OF THE DAY ?
// EX : I/P=>3  O/P=>TUESDAY    I/P=>7   O/P=>SATURDAY  I/P=>5   O/P=>THURSDAY 


// 1)WAP TO SWAP TWO VARIABLE WITH USING THIRD VARIABLE? 

// let a  = 10;
// let b = 20;
// let c =0;

// console.log("Before swapping");
// console.log(a);
// console.log(b);

// console.log("After Swapping");
// c = a  // c = 10
// a = b; // a= 20
// b = c;// b = 10

// console.log(a);
// console.log(b);

// ==================================

// 2)WAP TO SWAP TWO VARIABLES WITHOUT USING THIRD VARIABLE ? 

// let a = 10;
// let b = 20;

// console.log("Before swapping");
// console.log(a);
// console.log(b);

// console.log("After Swapping");
// a = a+b; // a= 30
// b = a-b; // b = 30-20 = 10
// a = a-b; // a = 30-10 = 20
// console.log(a);
// console.log(b);


let fruits = "apple"
        switch (fruits) {
            case "banana":
                console.log("Banana Fruit")
                break;
            case "apple":
                console.log("Apple Fruit")
                break;
            case "sapota":
               console.log("Sapota Fruit")
                break;  
            default:
               console.log("wrong fruit name")
                
        }
