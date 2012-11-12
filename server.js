
var fs = require("fs");
var sharejs = require("share").server;
var express = require("express");

var imagePath = __dirname + "/opinsys.png";
var index = __dirname + "/index.html";

var app = express();

sharejs.attach(app, {
  db: {
   type: "none"
  }
});


app.get("/", function(req, res){
  res.setHeader("Content-Type", "text/html");
  fs.createReadStream(index).pipe(res);
});

app.get("/:id/image.png", function(req, res){
  console.log("Sending image", req.url, "to", req.headers["user-agent"]);
  res.setHeader("Content-Type", "image/png");
  fs.createReadStream(imagePath).pipe(res);
});

app.listen(3000, function(){
  console.log("listening on 3000");
});

