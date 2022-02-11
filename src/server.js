'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
// const { Users, items } = require('./models');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/categories', async (req, res) => {
  let fullList = await items.read();
  res.status(200).json(fullList);
})

app.get('/products', async (req, res) => {
  let receivedItem = req.body;
  let addedItem = await items.create(receivedItem);
  res.status(200).json(addedItem);
})

app.put('/products', async (req, res) => {
  let itemId = req.body.id;
  console.log('PUT BODY', req.body);
  let updatedItem = await items.update(itemId, req.body);
  res.status(200).json(updatedItem);
})

app.delete('/todo/:id', async (req, res) => {
  let itemId = req.params.id;
  let deletedItem = await items.delete(itemId);
  res.status(200).json(deletedItem);
})

const start = (port) => {
  app.listen(port, () => {
    console.log('Server up on:', port);
  })
}

module.exports = {
  app,
  start
};
