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

//GET one item by id
router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)
    res.json(item)
  } catch (error) {
    next(error)
  }
})

//DELETE item by id 
router.delete('/:id', async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id)

    if (!item) {
      return res.status(404).send('Item not found')
    }
    await item.destroy()

    res.status(204).send()
  } catch (error) {
  
    next(error)
  }
})

// POST /item to add an item 
router.post('/', async (req, res, next) => {
  try {
    const item = await Item.create(req.body)
    res.status(201).json(item)
  } catch (error) {
    next(error)
  }
})

//PUT/ item/:id to update an item
router.put('/:id', async (req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.id)

        if (!item) {
            return res.status(404).send('Item not found')
        }

        await item.update(req.body)

        res.json(item)
    } catch (error) {
        next(error)
    }
})

module.exports = router
