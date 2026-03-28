// sum of two numbers

let a = 10;
let b = 20;
console.log(a+b);     // addition 

 // if the answer in console is in blue colour it is number,if it is in black/white(if pc has dark mode) then it is string


 let c = 10;
 let d = "20";
console.log(c+d);
console.log(typeof(c+d));

// addition of string + number is known as "concatination", add of two different datatypes is known as concatination




// ++++++++++++++++++++++++++ relation between string nd integer +++++++++++++++++++++++++++++++++++++++++++++++++

 a = 13;
 b = 10;
console.log("sum of a and b is :" + (a+b));     // output is string  , string + num => string



console.log(1+"1");  // output is string bcoz of concatination
//+++++++++++++++++ TYPE COERCION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(1-"1");    // op is num
console.log(1*"1");     //op is num
console.log(1/"1");     //op is num
console.log(1%"1");     // op is num


// Accept and print the ans

//# conversion of any type like num <=> string , boolean <=> num , etc is known as TypeCasting or Typeconversion

let age  = Number(prompt("what is your age"));
console.log(age);
console.log(typeof(age));




