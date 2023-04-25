import React from 'react';
import './Cards.css';
export default function Card({ product }) {
  function handle(){
    alert(`product name is ${product.name} and product description is ${product.description} product price is ${product.price}`)
  }
  return (
    <div className='cardWrapper'>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h1>Price :{product.price}</h1>
      <button onClick={handle}>See More...</button>
    </div>
  );
}