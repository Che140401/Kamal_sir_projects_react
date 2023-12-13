//wajp to track ppl attending my bday party
let prompt=require('prompt-sync')();
let names=[];


while(true)
{
	let op = parseInt(prompt("1 add, 2 view ,3 remove and 4 exit"));
	if(op == 1){
		let n =  prompt("enter name");
		names.push(n);
		console.log(n,"added");
	}else if(op == 2){
		console.log(names);
	}else if(op == 3){
		let n=prompt("please enter the name");
		if(names.includes(n)){
			names.splice(names.indexOf(n),1);
			console.log(n,"removed");
		}else {
			console.log(n,"not present");
		}
	}else if(op == 4){
		break;
	}else {
		console.log("sorry i dont understand");
	}
}