let prompt=require("prompt-sync")();
let marks=[];
let res=prompt("do you want to marks y/n ");
while(res == "y")
{
	let m=parseInt(prompt("enter marks"));
	marks.push(m);
	res=prompt("do u want to enter more y/n");
}

//array procesing
let pass=0,fail=0;
for(let i=0;i<marks.length;i++)
{
	if(marks[i] >= 7)  pass++;
	else               fail++;
}
console.log("pass" +pass);
console.log("fail" +fail);
