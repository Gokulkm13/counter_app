import React, { useState } from 'react'
import "./App.css"
import { Counter } from './Components/Counter';

const App =()=>{
  const [count , setCount] = useState(0);
  let incrementHandler =()=>{
    if(count<10){
setCount((prev)=>prev+1);}

console.log("set to incrementing");
  };
  let decrementHandler =()=>{
    if(count >0){
setCount((prev)=> prev-1);}
console.log("set to decrementing");
  };
  return (

   <Counter count={count} incrementHandler={incrementHandler} decrementHandler={decrementHandler}/>
      );
      
     // console.log("this app is running");
};
export default App
