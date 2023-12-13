const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
res.setHeader("Access-Control-Allow-Origin","*");
let path = url.parse(req.url,true);

if(path.pathname == "/find"){
    let num = parseInt(path.query.number);
    let msg = num % 2 == 0? "res = even":"res = odd";
    res.write(msg);
    res.end();
}
});

server.listen(9000,() => {console.log("ready to serve @ 9000");}) 
