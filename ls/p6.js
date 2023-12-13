//wajp to read radius from the user
//and print area and circum of circle

let prompt=require("prompt-sync")();
let radius=parseFloat(prompt("Enter the radius"));

const PI = 3.14;
let area_of_circle=PI*radius*radius;
let circum_of_circle=2*PI*radius;

console.log("area ="+area_of_circle.toFixed(2));
console.log("circum ="+circum_of_circle.toFixed(2));

