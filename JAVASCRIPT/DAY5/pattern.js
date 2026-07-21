// *
// * *
// * * *
// * * * *
// * * * * *

// let row = 5;
// let star = 0;
// for(let i=1;i<=row;i++){ // i=1 1<=5 T // i=2 2<=5 T // i=6 6<=5 F
//     star++; // star=1 // 2
//     let line = ''; // line = '' // line = ''
//     for(let j=1;j<=star;j++){ // j=1 1<=2 j++ T // j=2 2<=2 T // j=3 3<=2 F
//         line = line + "*"; // line = * *
//     }
//     console.log(line);
// }
// ==============================================

4. 
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let row = 5;
// let star = 6;
// let space = -1;

// for(let i=1;i<=row;i++){
//     star--;// 5 // 4 // 3
//     space++; // 0 // 1 // 2
//     let line = '';
//     for(let j=1;j<=space;j++){ // 
//         line = line +" ";
//     }
//      for(let j=1;j<=star;j++){
//         line = line +"* ";
//     }
//     console.log(line);
// }

5.
//      *
//     **
//    ***
//   ****
//  *****


11.

    //    *
    //   ***
    //  *****
    // *******


    // 13. * * * * *
        // * * * * 
        // * * * 
        // * * 
        // *

  3.       
//          *
//        *   *
//      *   *   *
//    *    *    *   *
//  *    *   *     *   *

// 7.  1
//     2 3
//     4 5 6
//     7 8 9 10

// let num = 1;
// for(let i=1;i<=4;i++){ // i=1 1<=4 T // i=2 2<=4 T
//     let line = ''; // line = ''
//     for(let j=1;j<=i;j++){ // j=1 1<=2 T // j=2 2<=2 T // j=3 3<=2 F
//         line = line + " " +num; // line = 2 3
//         num++; // 2 // 3 // 4
//     }
//     console.log(line);
    
// }

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10

6. 
// a
// b c
// d e f
// g h i j 

// ASCII :- American standard code information interchange 
// A = 65
// a = 97 

// let charCode = 97;
// for(let i=1;i<=4;i++){
//     let line = '';
//     for(let j=1;j<=i;j++){
//         line = line +" "+ String.fromCharCode(charCode)
//         charCode++;
//     }
//     console.log(line);
// }


// 9
// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(let i=1;i<=5;i++){ // i=1 // i=2
    let line = '';
   for(let j=1;j<=5;j++){// j=1 1<=5 // 2<=5 T // j=5 5<=5
     if(i==1 || i==5 || j==1 || j==5){ 
        line = line + "*"; // line = * 
    }else{
        line = line +" "
    }
   }
    console.log(line);
}

//        *
//      * * *
//    * * * * * 
//  * * * * * * * 
//    * * * * * 
//      * * * 
//        *