require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const categoryModel = require('./categories');
const productModel = require('./products');
const Collections = require('./collections');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
} : {}

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

const productSchema = productModel(sequelize, DataTypes);
const categorySchema = categoryModel(sequelize, DataTypes);
const products = new Collections(productSchema);
const categories = new Collections(categorySchema);

module.exports = {
  db: sequelize,
  products,
  categories
}

