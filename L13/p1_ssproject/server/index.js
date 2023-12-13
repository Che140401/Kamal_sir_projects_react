const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"abc123",
	database:"ss1oct23"
});

app.post("/save",(req,res)=>{
	let data=[req.body.name,req.body.company,req.body.pkg];
	let sql = "insert into student values(?,?,?)";
	con.query(sql,data,(err,result)=>{
		if(err)            return res.send(err);
		else              return res.send(result);
	});
});

app.listen(9000,()=>{ console.log("ready to serve @ 9000"); });