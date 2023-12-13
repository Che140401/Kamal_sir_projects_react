let prompt=require('prompt-sync')();
let n1=parseFloat(prompt("Enter the first number"));
let n2=parseFloat(prompt("Enter the second number"));
let msg;
if(n1>n2){
console.log("min is=",n2);}
else{
console.log("min is=",n1);
}

console.log("min =",Math.min(n1,n2));