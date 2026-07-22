// let arr = [1,2,3,4,5,6,"hy"]

// console.log(arr);
// console.log(arr[4]);


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// Methods of Array :- 
// 1. push 
// 2. pop 
// 3. shift
// 4. unshift
// 5. slice
// 6. splice 
// 7. indexOf
// 8. includes


// push :- add the element from the end.
// let arr1 = [1,2,3,4,5,6,7]
// arr1.push(100)
// console.log(arr1);

// pop :- remove the elemenet from the end
// let arr2 = [1,2,3,4,5,6,7]
// console.log(arr2.pop());

// Shift :- remove the element from the begin.
// let arr3 = [1,2,3,4,5,6,7]
// console.log(arr3.shift());


// unshift :- add the element from the beginging.
// let arr4 = [1,2,3,4,5,6,7]
// arr4.unshift(10,20,30)
// console.log(arr4);

// slice :- we can extract the subarray from the array.
// Syntax :- slice(start index,end index)  -> end index - exclude
// let arr5 = [1,2,3,4,5,6,7]
// let slice1 = arr5.slice(0,5)
// console.log(slice1);
// console.log(arr5);


//splice :- using this method we can delete the element and replace with another.
//  Syntax  :- splice(start index , deletCount,ele , ele , ele)
// let arr6 = [1,2,3,4,5,6,7,8,9]
// arr6.splice(1,0,100,200,300)
// console.log(arr6);


// // indexOf() :- we can check the index of the element.
// let arr7 = [1,2,3,4,5,6,7,8,9,"hy"]
// console.log(arr7.indexOf("hy"));


// // includes :- check element is exist or not .
// let arr8 = [1,2,3,4,5,6,7,8,9,"hy"]
// console.log(arr8.includes(80));


// ==========================================

// Iteration Method :- 
// forEach  -> value , index , araay

let arr8 = [1,2,3,4,5,6,7,8,9,"hy"]
let forEach1 = arr8.forEach((value,index,array)=>{
     console.log(value);
    console.log(index);
    console.log(array);
})

// for of and for in 
// map 
// / reduce / filter 










