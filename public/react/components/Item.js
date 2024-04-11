import React from 'react'

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <img src={item.image} alt={item.name} />
      <button>View Details</button>{' '}
      {/* Add a button to view details of the item */}
    </div>
  )
}

export default Item
