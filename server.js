var express = require('express');
var app = express();
var bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var ingredients = [
  {
    "id": "1",
    "text": "eggs"
  },
  {
    "id": "2",
    "text": "milk",
  },
  {
    "id": "3",
    "text": "ham"
  }
]

app.get('/', (req, res)=>{
  res.send(ingredients)
})

app.post('/', (req, res) => {
  var ingredient = req.body;
  if (!ingredient || ingredient === ""){
    res.status(500).send({error: "Your ingredient must have text"})
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }
})

app.get('/help/', (req, res) => {
  res.send("I am here to help")
})

app.get('/me', (req, res) => {
  res.send("This is me")
})


app.listen(3000, () => {
  console.log("listening on port 3000")
})
