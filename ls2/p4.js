let prompt=require('prompt-sync')();
let name=prompt("Please enter the name");

if(name==""){
	console.log("no name");
}
else{
let msg="Good morning"+name;
console.log(msg);
}