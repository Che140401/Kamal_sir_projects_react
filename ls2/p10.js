let prompt=require("prompt-sync")();
let marks=parseFloat(prompt("Please enter the marks"));
if(marks<0 && marks>100)
	console.log("invalid data");
else if(marks>80)	
	console.log("Your marks"+marks+" "+" and your grade is A");
else if(marks>60)
	console.log("Your marks"+marks+" "+" and your grade is B");
else if(marks>40)
	console.log("Your marks"+marks+" "+" and your grade is C");
else
	console.log("Your marks"+marks+" "+" and your grade is B");