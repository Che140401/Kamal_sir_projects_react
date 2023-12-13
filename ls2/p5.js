//gm/ge/ga

let prompt=require('prompt-sync')();
let name=prompt("Please enter the name");
if(name==""){
console.log("you did not enter name");}
else{
	let d=new Date();
	let hr=d.getHours();
	let msg="";
if(hr<12) msg="Good morning";
else if(hr<16) msg="Good afternon";
else           msg="Godd Evening";
console.log(msg+" "+name+" "+hr+" "+d);

}