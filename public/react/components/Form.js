import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    imageUrl: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(formData)
  }
}

return (
  <form onSubmit={handleFormSubmit}>
    <p>Name</p>
    <input
      name='name'
      type='text'
      value={formData.name}
      onChange={handleChange('name')}
    />

    <p>Price</p>
    <input
      name='price'
      type='number'
      value={formData.price}
      onChange={handleChange('price')}
    />

    <p>Description</p>
    <input
      name='description'
      type='text'
      value={formData.description}
      onChange={handleChange('description')}
    />

    <p>Category</p>
    <input
      name='category'
      type='text'
      value={formData.category}
      onChange={handleChange('category')}
    />
    <input
      name='imageUrl'
      type='text'
      value={formData.imageUrl}
      onChange={handleChange('imageUrl')}
    />
    <button type='submit'>Submit</button>
  </form>
)

export default Form
