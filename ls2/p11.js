//wajp to read age of the user
// and print if the person can vote

let prompt=require("prompt-sync")();
let age=parseFloat(prompt("Please enter age"))	;

if(age <= 0 || age > 120)
	console.log("Invalid data");
else if(age >=18)
	console.log("Vote yes");
else
	console.log("please completre your age");

