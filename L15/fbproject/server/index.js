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
        database:"fb8oct23"
});

app.post("/save",(req,res)=>{
  let data = [req.body.name,req.body.feedback];
  let sql = "insert into student value(?,?)";
  con.query(sql,data,(err,result)=>{
    if(err) return res.send(err);
    else return res.send(result);
  })
})

app.listen(9000,() => {console.log("ready @ 9000");});

