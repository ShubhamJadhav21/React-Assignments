import React from 'react';
import './App.css';
import Card from './components/Card';
export default function App() {
  
  const productDetails = [
    {
      id: 1,
      name: 'Product One',
      description: 'This is the description of Product One',
      price: '100',
      image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
      
    },
    {
      id: 2,
      name: 'Product Two',
      description: 'This is the description of Product Two',
      price: '200',
      image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
      
    },
    {
      id: 3,
      name: 'Product Three',
      description: 'This is the description of Product Three',
      price: '300',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbkJjNjyu_Iwb1HrDObhvC0oIcU1Kv-504kljVaXjBg&usqp=CAU&ec=48600112',
      
    },
  ];

  return (
    <div className='App'>
      {productDetails.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}