var express    = require("express"), 
    path       = require('path'),
    bodyParser = require('body-parser'),
    app        = express(),
    root       = path.resolve(__dirname);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req,res) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile("index.html", {root: root});
})

app.get("/marketing", function(req,res) {
  res.setHeader("Content-Type", "text/plain")
  res.end("Buy allz teh productz\n")
})

app.get("/uploads", function(req,res) {
  res.setHeader("Content-Type", 'text/html');
  res.sendFile('uploads.html', {root: root});
})

app.post("/uploads", function(req,res) {
  console.log(req.body)
  res.setHeader("Content-Type", "text/plain")
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('handling it')
})
  
app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');