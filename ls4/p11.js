//regular fn

let prompt = require("prompt-sync")();

let mysort = function(s)
{
	return s.split("").sort().join("");
}

let s1 = prompt("enter first string");
let ss1 = mysort(s1);

let s2=prompt("enter second string");
let ss2 = mysort(s2);

if(ss1 == ss2)
	console.log("yes, they are anagrams");
else
	console.log("nope they are not anagrams");