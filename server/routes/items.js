const express = require('express')
const router = express.Router()
const { Item } = require('../models')

// GET /item
router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.send(items)
  } catch (error) {
    next(error)
  }
})


// GET all /items 
router.get('/', async (req, res, next) => {
    try{
        const items = await Item.findAll()
        res.send(items);
    } catch (error) {
        next(error); 
    }
})

//GET one /item
router.get('/:id', async (req, res, next) => {
    try{
        const item = await Item.findByPk(req.params.id)
        res.send(item);
    } catch (error) {
        next (error); 
    }
})

module.exports = router
