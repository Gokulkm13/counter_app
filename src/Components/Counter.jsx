import React, { Fragment } from 'react'

 export const Counter = ({count,incrementHandler,decrementHandler}) => {
  return (
    <Fragment>
         <div>
      <h1>Count number : {count}</h1>
     <button onClick={incrementHandler}>increment</button>
     <button onClick={decrementHandler}>decrement</button>
      </div>
    </Fragment>
  )
}

