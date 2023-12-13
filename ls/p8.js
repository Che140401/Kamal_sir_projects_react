//wajp to read amount in dollars
//and convert into rupees
//if possible print rupee sumbol

let prompt = require("prompt-sync")();

let aid =parseFloat(prompt("Please enter dollars"));

let air =aid*83.50;

let result="Rupees is"+air;
console.log("amt in rupees = \u20B9"+air.toFixed(2));