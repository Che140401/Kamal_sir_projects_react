let prompt=require('prompt-sync')();
let rating=parseInt(prompt("Enter the rating between 1 to 5"));
switch(rating)
{
	case 5 : console.log("Excellent");  break;
	case 4 : console.log("Excellent");  break;
	case 3 : console.log("Good");       break;
	case 2 : console.log("Good");         break;
	case 1 : console.log("Ok");         break;	
	default: console.log("Invalid rating"); break;
}