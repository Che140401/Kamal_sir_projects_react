let prompt=require("prompt-sync")();
let radius = parseFloat(prompt("Enter the radius"));

if(radius > 0.0)
{
 let area=3.14*radius**2;
 let diameter=2*radius;
 let circum=2*3.14*radius;
 console.log("area of circle is "+area.toFixed(2)+" "+"area of diameter is "+" "+diameter.toFixed(2)+" area of circumference is "+" "+circum.toFixed(2));
}
else{
console.log("invalid radius");
}