let prompt=require("prompt-sync")();
let num=parseInt(prompt("Please enter the number"));

if(num >= 0)
{
	let fact=1,i=1;
	do{
	   fact*=i;
	   i++;
	}while(i<=num);
	console.log("fact ="+fact);
}
else
{
	console.log("invalid input");
}