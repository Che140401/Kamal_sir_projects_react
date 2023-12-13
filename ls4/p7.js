//wajp to read a string
//and reverse the string
//todho --> ulta --> jodo
//split() --> reverse() --> join


let prompt=require('prompt-sync')();

let str=prompt("please enter string");
let rstr = str.split("").reverse().join("");

console.log(str);
console.log(rstr);

if(str == rstr)
	console.log("it's palindrome");
else
	console.log("no it's not palindrome");