let prompt=require("prompt-sync")();
let year=parseInt(prompt("Please enter the year"));
let result=year%4;

switch(result){
	case 0: console.log("its leap year"); break;
	default: console.log("its not leap year"); break;
}