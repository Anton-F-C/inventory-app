import React, { useState } from 'react'

const AddItemForm = () => {
  const [newItem, setNewItem] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`${apiURL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newItem,
        description,
        price,
        category,
        image,
      }),
    })

    const data = await response.json()

    setName('')
    setDescription('')
    setPrice(0)
    setCategory('')
    setImage('')
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          name='name'
          type='text'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          name='description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          name='price'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          name='category'
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <button type='submit'>Add Item</button>
    </form>
  )
}

export default AddItemForm
