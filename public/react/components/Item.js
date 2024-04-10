import React, { useState } from 'react'

// q- change props in line 4 to {item, deleteItem?}
export const Item = (props) => {
  const [newItem, setNewItem] = useState({ name: '', image: '', body: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      })

      if (!response.ok) {
        throw new Error('failed to add the item')
      }

      const data = await response.json()
      console.log(data)
      setNewItem({ name: '', image: '', body: '' })
    } catch (error) {
      console.error(error)
    }
  }

 };

  return ( 
  <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
    <button onClick = {handleSubmit}> Add Item </button>
    <button onClick={() => deleteItem(Item.id)}> Delete Item </button>
</>

   )
