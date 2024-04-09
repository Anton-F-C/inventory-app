import React from 'react';

export const Item = (props) => {

  return <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
    <button> Add Item </button>
    <input type = {string} value = {props.item.body} ></input>
  </>
} 
	
