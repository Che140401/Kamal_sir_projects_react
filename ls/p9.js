//wajp to read temp in fah and
//convert into celcius

let prompt =require("prompt-sync")()
let fah = parseFloat(prompt("Enter the fah"));
let cel= (fah - 32) * 5 / 9;

console.log("you celcius is"+cel);


