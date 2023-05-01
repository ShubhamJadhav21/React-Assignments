import React, { useEffect, useRef, useState } from 'react';
import './Image.css';
export default function Image() {
  const [image, setImage] = useState('https://www.ikea.com/in/en/images/products/smycka-artificial-flower-rose-red__0903311_pe596728_s5.jpg?f=s');
  const imageRef = useRef();

  useEffect(()=>{
    alert('you are changing the image')
  },[image])
  const getImage = () => {

    const newImage = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
    setImage(newImage);
  };

  return (
    <div className='container'>
      <img src={image} ref={imageRef} alt="New Image" />
      <button onClick={getImage}>Change Image</button>
    </div>
  );
}
