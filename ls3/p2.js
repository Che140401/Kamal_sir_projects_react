//wajp to check if the given year is leap year
//every 4 years-->multiple of 4 / divisble by 4 / % 4
let prompt=require("prompt-sync")()
let year=parseInt(prompt("Enter the year to check leap year"));
if(year % 4 == 0)
	console.log("Its a leap year");
else
	console.log("Its not a leap year");
//