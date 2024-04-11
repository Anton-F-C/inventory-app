import React from 'react'

const Item = ({ item, deleteItem, viewDetails, addItem }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <img src={item.image} alt={item.name} />
      <button onClick={()=> viewDetails(item.id) }>View Details</button>
      {/* Add a button to view details of the item */}
      <button onClick={() => deleteItem(item.id)}> Delete Item </button>
      <button onClick={() => addItem(item.id)}> Add Item </button>
    </div>
  )
}

export default Item
