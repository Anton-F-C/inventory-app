const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')

const Sauce = sequelize.define('sauces', {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
})

const Item = sequelize.define('items', {
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
})

module.exports = {
  db: sequelize,
  Sauce,
  Item,
}
