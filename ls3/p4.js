//wajp to font sum of first "n" +ve integers
//i/p: 5 1+2+3+4+5=15

let prompt=require("prompt-sync")();
let n=parseInt(prompt("Please enter the number"));

if(n > 0){

	let i=1;
	let sum=0;
	while(i<=n)
	{
		sum += i;
		i+=i;
	}
	console.log(sum);
}
else{
	console.log("invalid input");
}