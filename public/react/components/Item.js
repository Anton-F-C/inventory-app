import React, { useState } from 'react'

export const Item = (props) => {
  const [newItem, setNewItem] = useState({ name: '', image: '', body: '' })
return (
  <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
    <button> Add Item </button>
  </>
)
}