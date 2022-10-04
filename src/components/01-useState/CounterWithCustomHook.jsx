import React from 'react'
import useCounter from '../../hooks/useCounter'
import './counter.css'

//implementar un boton de reset con el valor de initialState

const CounterWithCustomHook = () => {

 const {state, increment, decrement, reset} = useCounter(10);
 


  return (
    <>
    <h1>Counter with Hook: { state }</h1>
    <hr/>

    <button className='btn btn-primary' onClick={()=> increment(1)}>+1</button>
    <button className='btn btn-primary' onClick={reset}>Reset</button>
    <button className='btn btn-primary' onClick={()=> decrement(1)}>-1</button>

    
    </>
  )
}

export default CounterWithCustomHook