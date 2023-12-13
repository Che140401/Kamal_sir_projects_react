//fat arrow fn

let prompt=require("prompt-sync")();

let mysort = (s) =>
{
	return s.split("").sort().join("");
}

let s1=prompt("please eneter the first string");
