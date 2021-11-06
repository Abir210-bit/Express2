const express = require('express');
const app = express();


//Simple request time logger
const myLogger = function (req, res, next) {
  console.log("A new request received at " + Date.now());
   next();
}

app.use(myLogger);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000);