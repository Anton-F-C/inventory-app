import React from 'react'

const Item = ({ item, deleteItem, viewDetails, addItem }) => {
  return (
    <div className = "item" >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <img src={item.image} alt={item.name} />
      <button >View Details</button>{' '}
      <button onClick={() => deleteItem(item.id)}> Delete Item </button>
      {/* Add a button to view details of the item */}
      
    </div>
  )
}

export default Item
