let prompt=require('prompt-sync')();
let n1=parseFloat(prompt("Enter the first number"));
let n2=parseFloat(prompt("Enter the second number"));
let n3=parseFloat(prompt("Enter the third number"));
let n4=parseFloat(prompt("Enter the fourth number"));

console.log("min =",Math.min(n1,n2,n3,n4).toFixed(2));
console.log("max =",Math.max(n1,n2,n3,n4).toFixed(2));