'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const { categories, products } = require('./models');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/categories', async (req, res) => {
  let allCategories = await categories.read();
  res.status(200).json(allCategories);
})

app.get('/products', async (req, res) => {
  let allProducts = await products.read();
  res.status(200).json(allProducts);
})

app.post('/categories', async (req, res) => {
  let receivedCategory = req.body;
  let addedCategory = await categories.create(receivedCategory);
  res.status(200).json(addedCategory);
})

app.post('/products', async (req, res) => {
  let receivedProduct = req.body;
  let addedProduct = await products.create(receivedProduct);
  res.status(200).json(addedProduct);
})

app.put('/products', async (req, res) => {
  let productId = req.body.id;
  console.log('PUT BODY', req.body);
  let updatedProduct = await products.update(productId, req.body);
  res.status(200).json(updatedProduct);
})

// app.delete('/todo/:id', async (req, res) => {
//   let itemId = req.params.id;
//   let deletedItem = await items.delete(itemId);
//   res.status(200).json(deletedItem);
// })

const start = (port) => {
  app.listen(port, () => {
    console.log('Server up on:', port);
  })
}

module.exports = {
  app,
  start
};
