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
function right2(z){
 var j = z.slice(-2);
 var k = z.slice(0 , -2);
 	return j + k
}
document.write(right2("Hello"));
document.write(right2("java"));
document.write(right2("Hi"));

document.write('<br>');

// Q5.
function conCat(str1,str2){
 	if (str1.slice(-1) === str2.charAt(0)){
 		return str1 + str2.slice(1);
 	}else{ 
 		return str1.concat(str2);
 	}
}
document.write(conCat("abc" , "cat"));
document.write(conCat("dog" , "cat"));
document.write(conCat("abc" , ""));

document.write('<br>');

// Q6.
function frontAgain(str){
 return str.slice(0,2) == str.slice(-2);
}

document.write(frontAgain("edited"));
document.write(frontAgain("edit"));
document.write(frontAgain("ed"));

document.write('<br>');

// Q7.
function deFront(str){
	if(str.charAt(0) === "a"){
		var j = str.slice(2)
		return "a" + j ;
	}else if(str.charAt(0) === "b"){
		return str.slice(1);
	}else{
		return str.slice(2);
	}
}
document.write(deFront("Hello"));
document.write(deFront("java"));
document.write(deFront("away"));
document.write(deFront("battery"));

document.write('<br>');

// Q8.
function withoutX2(str){
 if(str.charAt(0) == "x" && str.charAt(1) == "x"){
 	return str.slice(2);
 }else if(str.charAt(0) == "x"){
 	return str.slice(1);
 }else if(str.charAt(1) == "x"){
 	var j = str.slice(0,1);
 	return j + str.slice(2);
 }else{
 	return str.slice(0);
 }
}
document.write(withoutX2("xHi"));
document.write(withoutX2("Hxi"));
document.write(withoutX2("Hi"));
document.write(withoutX2("xxHi"));

document.write('<br>');

// Q9.
function lastChars(a,b){
	if(a.length == 0){
		return "@" + b.slice(-1);
	}else if(b.length == 0){
		return a.charAt(0) + "@";
	}else{
		return a.charAt(0) + b.slice(-1);
	}
}
document.write(lastChars("last", "chars"));
document.write(lastChars("yo", "java"));
document.write(lastChars("hi", ""));

document.write('<br>');

// 10.
function middleTwo(str){
	if (str.length >= 2 && str.length % 2 == 0){
		var x = str.length / 2;
		var y = str.slice(0 , x);
		var z = str.slice(x);
		return y.slice(-1) + z.charAt(0);
	}
}
document.write(middleTwo("string"));
document.write(middleTwo("code"));
document.write(middleTwo("Practice"));