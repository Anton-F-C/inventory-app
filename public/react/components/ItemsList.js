import React from 'react'
import Item from './Item'

export const ItemsList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => {
        return (
          <li key={idx}>
            <Item item={item} />
          </li>
        )
      })}
    </ul>
  )
}
