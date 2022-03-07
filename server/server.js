const express = require("express"); // import express
const app = express(); // instantiate the express app
app.use(express.static("public"));
app.listen(3000, function () {
  console.log("App started on port 3000");
});
