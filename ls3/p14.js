//wajp to read Array of numbers
//count 1) -ve 2) -ve and 3) 0's

let prompt=require("prompt-sync")();
let data=[];

let res=prompt("do you want to enter numbers y/n");
while(res == "y")
{
	let d=parseFloat(prompt("enter number"));
	data.push(d);
	res = prompt("do u want enter more y/n");
}

let c1=0,c2=0,c3=0;
for(let i of data)
{
	if(i > 0)             c1++;
	else if(i < 0)        c2++;
	else                        c3++;
}


console.log("positive ="+c1);
console.log("negative ="+c2);
console.log("0's ="+c3);