import React, { useEffect, useState } from 'react';
import apiURL from '../api';
export const Item = (props) => {
    const [item, setItem] = useState({})

    async function fetchItem() {
        try {
            const response = await fetch(`${apiURL}/items/${props.???}`)
            const data = await response.json()
            setItem(data)
        } catch (error) {
            console.error('There was an error.', error)
        }
}
useEffect(() => {
    fetchItem()
}, [])

const[isOpen, setIsOpen] = useState(false);
const handleClick = () =>  setIsOpen(!isOpen)
return (
    <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={handleClick}>Toggle</button>
        {isOpen && <p>{item.price}</p>}
    </div>
)
}
