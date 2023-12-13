//wajp to ask the name of the student
//and if the name is entered then welcom

let prompt=require('prompt-sync')();
let name=prompt("Please enter the name");

if(name!=""){
let msg="Good morning"+name;
console.log(msg);
}
else{
	console.log("no name");
}