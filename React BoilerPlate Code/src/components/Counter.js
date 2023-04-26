import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Counter.css';
export default function Counter() {

  const [count,setCount]=useState(0)

  function increment(){
    setCount(count+1)

  }
  const decrement = () => {
    setCount(count>0 ? count-1 : 0)
  };

  return (
    <div className='container'>
        <h1>{count}</h1>
      <button id='btn1' onClick={increment}><AddIcon/></button>
      <button id='btn2' onClick={decrement}><RemoveIcon/></button>
    </div>
  )
}
