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

    


  return <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
  </>
} 
};
}