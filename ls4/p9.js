//wajp to check if the given string
//alphabetize the string

let prompt=require('prompt-sync')();
let name=prompt("please enter the name");

let sort1=name.split("").sort().join("");

console.log(sort1);
