// ++++++++++ SWAPPING with 3 Methods ++++++++++++++++++++++

// method 1  swap with extra variable 

let a = 10;
let b = 20;

let c = a ;                           // c =  10 , a =10
// value of c has copy of a 
a = b ;                                //  a = 20 ,b = 20 ,c=10
b = c ;                                //  a = 20 , b= 10 , c=10 
console.log(a,b);


// method 2  swapping without using extra variable 

let x = 10 ;
let y = 20 ;

x = x + y ;  // x = 30 , y = 20
y = x - y ;  // y = 10 , x = 30
x = x - y ;   // x = 20 , y = 10
console.log(x,y);



// Method 3  it is known as "DESTRUCTURING ASSIGNMENT"  ( array destruction in js)

let A = 10 ;
let B = 20 ;

[A,B] = [B,A]
console.log(A,B);


// OPERATION ON MOD OPERATOR

let X = 4567
console.log(X % 10);  // to get last digit , % 100 to get last 2 digit





