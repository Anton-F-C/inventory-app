import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    imageUrl: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ ...formData })
  }

  const handleChange = (prop) => (event) =>
    setFormData({ ...formData, [prop]: event.target.value })

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='name'
        type='text'
        value={formData.name}
        onChange={handleChange('name')}
      />
      <input
        type='number'
        name='price'
        value={formData.price}
        onChange={handleChange('price')}
      />
      <input
        name='description'
        type='text'
        value={formData.description}
        onChange={handleChange('description')}
      />
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
}

export default Form
