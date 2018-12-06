const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());



let nextId = 4;

const shoppingList = [
  {
    id: 1,
    item: 'shoes',
    purchased: false
  },
  {
    id: 2,
    item: 'train set',
    purchased: false
  },
  {
    id: 3,
    item: 'army figures',
    purchased: false
  }
];

app.get('/api/test', (req, res) => {
  res.send('everything is working');
})

app.get('/api/shopping-list', (req, res) => {
  res.send(shoppingList);
})

app.post('/api/shopping-list', (req, res) => {
  const newItem = {
    id: nextId,
    item: req.body.item,
    purchased: false
  }

  nextId++;

  shoppingList.push(newItem)  
  res.send('ok');
})

app.put('/api/shopping-list/:id', (req, res) => {
  const newItem = {
    id: req.params.id,
    item: req.body.item,
    purchased: req.body.purchased === "true"
  }

  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].id == req.params.id) {
      shoppingList.splice(i, 1, newItem)
    }
  }

  res.send('ok')
})

app.delete('/api/shopping-list/:id', (req, res) => {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].id == req.params.id) {
      shoppingList.splice(i, 1);
    }
  }

  res.send('ok')
})

app.listen(3000, () => console.log('listening on port 3000'))
