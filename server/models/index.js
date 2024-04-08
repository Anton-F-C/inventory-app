const { Sequelize } = require('sequelize')
const { db, DataTypes } = require('../db')

const Sauce = db.define('sauces', {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
})

const Item = db.define('item', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = {
  db: sequelize,
  Sauce,
  Item,
}
