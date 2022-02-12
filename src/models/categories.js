'use strict';

const categoryModel = (sequelize, DataTypes) => sequelize.define('categories', {
  name: {
    type: DataTypes.STRING
  },
  displayName: {
    type: DataTypes.STRING
  }
})

module.exports = categoryModel;
