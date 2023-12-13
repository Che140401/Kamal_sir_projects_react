let prompt = require("propt-sync")();
let n=parseInt("prompt enter the number to sum")();

if(n>0 || n != "")
{	
let i=1;sum=0;
    do{	
	sum+=i;
	i++;
      }
    while(i<=n)
    console.log("sum ="+sum);
	
}
else{
	console.log("invalid input");
}