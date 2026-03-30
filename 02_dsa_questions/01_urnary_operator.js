// urnary operator ++ / --

// ++a => pre increment   , --a => pre decrement
// a++ => post increment  , a-- => post decrement 



// ++++++++++ solve ++++++++++

let a = 11;
let b = 22;
let c = a + b + a++ + b++ + ++a + ++b ;
console.log("a = " + a);      // 13
console.log("b = " + b);      // 24
console.log("c = " + c);      // 103



// 2   urnary operator doesn't works ob boollean in other languages but in js it works

 let A = true ;
 A++
 console.log(A);  // o/p = 2

 // for constant urnary operator gives error it works on variables

//  let x = 10;
//  10++
//  console.log(x); // syntax error


// let y = 10;
// let z = ++(y++)    // (y++)= 11 , ++(y++)=++(11) so error
// console.log(y);    // error
// console.log(z);    // error





 
 

