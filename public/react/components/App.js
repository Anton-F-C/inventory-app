import React, { useState, useEffect } from 'react'
import { SaucesList } from './SaucesList'
import { ItemsList } from './ItemsList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
  const [sauces, setSauces] = useState([])
  const [items, setItems] = useState([])

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

  return (
    <main>
      <h1>Sauce Store</h1>
      <h2>All things 🔥</h2>
      <SaucesList sauces={sauces} />

      <h1>All Items</h1>
      <ItemsList items={items} />
    </main>
  )
}
