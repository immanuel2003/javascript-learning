var a = 10;
var b = 20;
//create a new variable to hold what is in 'a'
var c = a;
//let 'a' take what is inside 'b'
a = b;
//now 'b' is empty, we now give it the value for 'c'
b = c;
//now print the output
console.log(a);
console.log(b);
