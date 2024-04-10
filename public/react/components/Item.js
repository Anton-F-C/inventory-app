import React, { useState}  from 'react';

export const Item = (props) => {
  const [newItem, setNewItem] = useState({ name: '', image: '' , body: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    try{
      const response = await fetch('/api/items', {
        method: 'POST', 
      headers:{'Content-Type': 'application/json',
    }, body: JSON.stringify(newItem),
    });

    if (!response.ok) {
      throw new Error('failed to add the item');
    }

    const data = await response.json();
    console.log(data);
    setNewItem({ name: '', image: '' , body: '' });
  } catch (error) {
    console.error(error);
  }
 };

  return <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
    <button> Add Item </button>

    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={newItem.name}
      onChange={(e) => setNewItem({...newItem, name: e.target.value })}
      />
      <input
      type="text"
      value={newItem.image}
      onChange={(e) => setNewItem({...newItem, image: e.target.value })}
      />
      <input
      type="text"
      value={newItem.body}
      onChange={(e) => setNewItem({...newItem, body: e.target.value })}
      />

    <input type = {string} value = {props.item.body} ></input>
    <input type = "string" value={props.item.body}/>
      
    </form>
  </>
};
