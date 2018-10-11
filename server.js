var express = require('express');
var app = express();

app.get('/', (req, res)=>{
  res.send("Hello from express")
})

app.get('/help', (req, res) => {
  res.send("I am here to help")
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})