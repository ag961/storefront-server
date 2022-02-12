'use strict';

const productModel = (sequelize, DataTypes) => sequelize.define('products', {
  name: {
    type: DataTypes.STRING
  },
  displayName: {
    type: DataTypes.STRING
  },
  category: {
    type: DataTypes.STRING
  },
  description: {
  type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  count: {
    type: DataTypes.INTEGER
  }
})

module.exports = productModel