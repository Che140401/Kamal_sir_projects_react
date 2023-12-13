//wajp to read two strings
//if the are anagrams
//two strings have same length
//but diff meanings

// listen silent

let prompt=require('prompt-sync')();
let name_1=prompt("please enter the name");
let sort_1=name_1.split("").sort().join("");


let name_2=prompt("please enter the name");
let sort_2=name_1.split("").sort().join("");

if(sort_1 == sort_2)
	console.log("yes, they are anagrams");
else
	console.log("no, they are not anagrams");
