let prompt=require("prompt-sync")();
let num=parseInt(prompt("Please enter the number"));

if(num>=0)
{
	let fact=1;i=1;
	while(i<=num)
	{

	fact*=i;
	i++;
	}
	console.log("fact ="+fact);
}

else{
	console.log("invalid input");
}