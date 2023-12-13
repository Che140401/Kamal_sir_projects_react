let prompt=require("prompt-sync")();
let num = parseInt(prompt("enter the number"));
if(num>=0)
{
	let fact=1;
	for(let i=1;i<=num;i++)
		fact=fact*i;
	console.log("fact ="+ fact);
}
else
{
	console.log("invalid integer");
}