const express = require("express");
const app = express();
const path = require("path");
const request = require("request");

app.listen(process.env.port || 4200, function() {
  console.log("up and running on port "+ process.env.PORT);
});
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "dist/infpa/index.html"));
});

console.log("app is listenning");
