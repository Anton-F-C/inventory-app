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

<<<<<<< HEAD

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
        res.send(items);
    } catch (error) {
        next (error); 
    }
})
=======
router.post('/', async (req, res) => {
  try {
      const newItem = await Item.create(req.body);
      res.status(201).json({ message: 'Item added successfully' });
  } catch (error) {
      res.status(400).json({ message: 'Error adding item' });
  }
}
);
>>>>>>> ce23d1e114d2edfa51720355582ad3203d001d28

module.exports = router
