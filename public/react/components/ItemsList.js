import React from 'react'
import Item from './Item'

export const ItemsList = ({ items, deleteItem, viewDetails, addItem }) => {
  return (
    <ul className='items-container'>
      {items.map((item, idx) => {
        return (
          <li key={idx}>
            <Item item={item} deleteItem={deleteItem} viewDetails={viewDetails} addItem = {addItem}/>
          </li>
        )
      })}
    </ul>
  )
}
