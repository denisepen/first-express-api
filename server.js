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

app.get('/ingredients', (req, res)=>{
  res.send(ingredients)
})

app.post('/ingredients', (req, res) => {
  var ingredient = req.body;
  if (!ingredient || ingredient.text === ""){
    res.status(500).send({error: "Your ingredient must have text"})
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredients);
  }
})

app.put('/ingredients/:ingredientId', (req, res) => {
  // var id = req.params.id;
  var newText = req.body.text;

  for (var x = 0; x < ingredients.length; x++){
    var ingred = ingredients[x];

    if  (ingred.id == req.params.ingredientId) {
        ingredients[x].text = newText;
        // break;
        // debugger
        res.send(ingredients);
        console.log("completed put request")
        }
        // res.send(ingredients);
  }
});

app.get('/help/', (req, res) => {
  res.send("I am here to help")
})

app.get('/me', (req, res) => {
  res.send("This is me")
})


app.listen(3000, () => {
  console.log("listening on port 3000")
})
