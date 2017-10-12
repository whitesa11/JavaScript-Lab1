document.write("Hello");

// Q1.
function makeAbba(a, b) {
	// body 
	return a + b + b + a ;
}

document.write(makeAbba("Hi", "Bye")); // "HiByeByeHi"
document.write(makeAbba("Yo", "Alice")); // "YoAliceAliceYo"
document.write(makeAbba("What", "Up")); // "WhatUpUpWhat"

document.write('<br>');

// Q2.
function endsLy(c){
 var k = c.slice (-2);
 return k == "ly";
}
document.write(endsLy("oddly"));
document.write(endsLy("y"));
document.write(endsLy("oddy"));

document.write('<br>');

// Q3.
function firstHalf(a){
 var k = a.length / 2 ;
 var str = a.slice(0 , k);
 	return str
}
document.write(firstHalf("WooHoo"));
document.write(firstHalf("HelloThere"));
document.write(firstHalf("abcdef"));

document.write('<br>');

// Q4.
function right2(c){
 var j = c.slice (-2);
 var k = c.slice(1);
 var str = c.replace(j, k);
 	return str
}
document.write(right2("Hello"));
document.write(right2("java"));
document.write(right2("Hi"));

document.write('<br>');

// Q5.
function conCat(c){
 var c = split [-2]
 	c == "ly"
}
document.write(endsLy("oddly"));

// Q6.
function frontAgain(c){
 var c = split [-2]
 	c == "ly"
}
document.write(endsLy("oddly"));

// Q7.
function deFront(c){
 var c = split [-2]
 	c == "ly"
}
document.write(endsLy("oddly"));

// Q8.
function withoutX2(c){
 var c = split [-2]
 	c == "ly"
}
document.write(endsLy("oddly"));

// Q9.
function lastChars(c){
 var c = split [-2]
 	c == "ly"
}
document.write(endsLy("oddly"));

// 10.
function middleTwo(c){
 var c = split [-2]
 	c == "ly"
}
document.write(endsLy("oddly"));