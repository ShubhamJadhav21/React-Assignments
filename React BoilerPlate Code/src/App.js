import React from "react";
import Cards from "./components/Cards";
import './App.css';

export default function App() {

  const card1Style={
    background:'rgb(252, 84, 48)'
  }
  const card2Style={
    background:'rgb(111, 229, 204)'
  }
  const card3Style={
    background:'rgb(255, 180, 47)'
  }
  const card4Style={
    background:'pink'
  }
  const card5Style={
    background:'orange'
  }
  const productDetails1 = {
    productId: "1",
    productPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlGbNY6ZSQa6iDHjauEa5gpa7HLmz2vrcjYJtuKcyQQ&usqp=CAU&ec=48600112",
    productName: "Watch",
    Brand: "Sonata",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "7$",
    rating: "4",
    
  };
 const  productDetails2= {
    productId: "2",
    productPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs70hYSRvMCN0uwW2nmZHds-zkPp1-SSp5tNuZ5mBIA&usqp=CAU&ec=48600112",
    productName: "T-Shirt",
    Brand: "Nike",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "20$",
    rating: "4",
  };
  const productDetails3 = {
    productId: "3",
    productPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR42j0lV3m4AIM-42OYzVqVRIEevnZNJY8CTUVsIjtk-4trymDEJ7aVCMDRnUv61qoOClqu-vI8-o&usqp=CAU&ec=48600112",
    productName: "Shoes",
    Brand: "Bata",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "70$",
    rating: "4",
    
  }
  const productDetails4 = {
    productId: "4",
    productPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIjBHM3-gxFU8EglpSqqLJgfxlOQj8yoDdQCrjzQwJw&usqp=CAU&ec=48600112",
    productName: "Shoes",
    Brand: "Adidas",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "60$",
    rating: "4",
  }
  const productDetails5 = {
    productId: "5",
    productPic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmJ8uiMWTnHPJAUCAfJAiW9hgeB8amGbxStu00e_dvw&usqp=CAU&ec=48600112",
    productName: "Watch",
    Brand: "Titan",
    productDescription:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, rem?",
    price: "15$",
    rating: "4",
    color:'ProductC'
  };

  return <div className="App">
    <Cards data={productDetails1} cardStyle={card1Style}/>
    <Cards data={productDetails2} cardStyle={card2Style}/>
    <Cards data={productDetails3} cardStyle={card3Style}/>
    <Cards data={productDetails4} cardStyle={card4Style}/>
    <Cards data={productDetails5} cardStyle={card5Style}/>
  </div>;
}
