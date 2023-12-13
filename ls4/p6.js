//wajp tp read the username and password
//if username is kamal and password is classes
//then o/p success else failure

let prompt=require('prompt-sync')();
let username = prompt("please enter the username");
//let password = prompt.hide("please enter the password");
//let password = prompt.hide("please enter the password");
let password = prompt("please enter the password",{echo:"*"});
if((username == "kamal" && password == "classes")){
	console.log("success");
}else{
	console.log("failure");
}

console.log(password);