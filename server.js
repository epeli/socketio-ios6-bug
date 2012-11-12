
var fs = require("fs");
var express = require("express");

var io = require('socket.io');

var imagePath = __dirname + "/opinsys.png";
var index = __dirname + "/index.html";

var app = express();
var server = require('http').createServer(app);
io = io.listen(server);

io.configure(function () {
  // io.set('transports', ['websocket']);
  io.set('transports', ['xhr-polling']);
});

app.get("/", function(req, res){
  res.setHeader("Content-Type", "text/html");
  fs.createReadStream(index).pipe(res);
});

// Allow random image urls to make sure that no caches are in play
app.get("/:id/image.png", function(req, res){
  console.log("Sending image", req.url, "to", req.headers["user-agent"]);
  res.setHeader("Content-Type", "image/png");
  fs.createReadStream(imagePath).pipe(res);
});

server.listen(3000, function(){
  console.log("listening on http://localhost:3000");
});

io.on("connection", function(socket){
  console.log("Got socket.io connection");
});
