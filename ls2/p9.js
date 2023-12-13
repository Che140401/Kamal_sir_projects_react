//wajp to read length & breadth from the user
//print area and perimeter of rectange

let prompt=require("prompt-sync")();
let l=parseFloat(prompt("Please enter the length"));
let b=parseFloat(prompt("Please enter the breadth"));

if((l>0.0) && (b>0.0)){
let area_of_rectangle=l*b;
let perimeter_of_rectangle=(l+b)*2;
console.log("your area rectange=", area_of_rectangle.toFixed(2));
console.log("your perimeter rectange=", perimeter_of_rectangle.toFixed(2));
}
else{
console.log("invalid data");}