import React, { useState, useEffect } from 'react'
import { SaucesList } from './SaucesList'
import { ItemsList } from './ItemsList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = (props) => {
  const [sauces, setSauces] = useState([])
  const [items, setItems] = useState([])
  // const [viewItemId, setViewedItemId] = useState(null)
  // const [newItem, setNewItem] = useState({ name: '', image: '', body: '' })
  const [selectedItem, setSelectedItem] = useState(null);

// need to define a viewDetails function for the event handler to work 
  async function viewDetails(id) {
    try{
      const response = await fetch(`${apiURL}/items${id}`)
      const item = await response.json()

        setViewedItemId(item)
    } catch (err) {
      console.log('Could not view item', err)
    }
  }

  // need delete function here for event handler to work 
  const deleteItem = async (itemId) => {
    try {
        const response = await fetch(`${apiURL}/items/${itemId}`, {
            method: 'DELETE'
        });
        if (response.status === 204) {
            setItems(items.filter(item => item.id !== itemId));
        }
    } catch (err) {
        console.log("error deleting item! ", err)
    }
}

 


async function addItem(itemsData) {
  try {
    const response = await fetch(`${apiURL}/items`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemsData),
    })
    const newItem = await response.json()
    setItems(prevItems => [...prevItems, newItem])  
  } catch (error) {
    console.log('error')
  }
}

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`)
      const saucesData = await response.json()

      setSauces(saucesData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`)
      const itemsData = await response.json()

      setItems(itemsData)
    } catch (err) {
      console.log('Oh no an error! ', err)
    }
  }

  useEffect(() => {
    fetchSauces()
    fetchItems()
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  console.log(props)

  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
    

  return (
    <main>
 <h1 onClick={handleClick}>Items Store</h1>
      {isOpen && 
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div class = "items" >
        <h4>Click on an item to see more details</h4>        
          {items.map((item, index) => (
          <p key={index} onClick={() => handleItemClick(item)}>{item.name}</p>
          ))}
        </div>
        {selectedItem && 
        <div class = "items-details">
          <h4>Details:</h4>
          <p>{selectedItem.name}</p>
          <p>{selectedItem.category}</p>          
          <p>{selectedItem.description}</p>
          <p>${selectedItem.price}</p>
          <img src={selectedItem.image} alt={selectedItem.name} width='200px' height='200'/>
          {/* {Object.entries(selectedItem).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
          ))} */}
          </div>}
      </div>}
    </main>
  )
}
