import React, { useState } from 'react'

const Form = ({ onSubmit, deleteItem, addItem, item }) => {
  const [newItem, setNewItem] = useState({ name: '', image: '', body: '' })
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    imageUrl: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setNewItem(newItem)
  }


return (
  <form className="form" onSubmit={handleFormSubmit} >
    <p>Name</p>
    <input
      name='name'
      type='text'
      value={formData.name}
      onChange= {(e)=>handleChange(e)}
    />

    <p>Price</p>
    <input
      name='price'
      type='number'
      value={formData.price}
      onChange= {(e)=>handleChange(e)}
    />

    <p>Description</p>
    <input
      name='description'
      type='text'
      value={formData.description}
      onChange= {(e)=>handleChange(e)}
    />

    <p>Category</p>
    <input
      name='category'
      type='text'
      value={formData.category}
      onChange= {(e)=>handleChange(e)}
    />
    <input
      name='imageUrl'
      type='text'
      value={formData.imageUrl}
      onChange= {(e)=>handleChange(e)}
    />
    <button type='submit'>Submit</button>
    <button onClick={() => deleteItem(item.id)}> Delete Item </button>
    <button onClick={() => addItem(item)}> Add Item </button>
  </form>
)
}

export default Form
