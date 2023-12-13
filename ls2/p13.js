//wajp to read rating (1-5)
//print 5/4 Excellent
//print 3/2 Good
//print 1 --> poor

let prompt=require('prompt-sync')();
let rating=parseInt(prompt("Please enter the rating 1 to 5"));
if(rating < 1 || rating == "" || rating > 5)
	console.log("Invalid data please enter the rating 1 to 5");
else if(rating >= 4)
	console.log("Excellent");
else if(rating >= 2)
	console.log("Good");
else if(rating == 1)
	console.log("poor");
else
	console.log("server issue");
	
