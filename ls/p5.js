//wajp to read three numbers
// and print their sum and avg

let prompt=require("prompt-sync")();
let n1=parseFloat(prompt("Enter the number1"));
let n2=parseFloat(prompt("Enter the number2"));
let n3=parseFloat(prompt("Enter the number3"));

let sum=n1+n2+n3;
let avg=sum / 3;
console.log("your sum is "+sum);
console.log("your avg is "+avg);

console.log("your sum is "+sum.toFixed(2));
console.log("your avg is "+sum.toFixed(3));

