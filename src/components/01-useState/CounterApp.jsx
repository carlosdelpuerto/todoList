import { useState } from 'react'
import './counter.css'
const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const {counter1, counter2} = state


  return (
    <>
    <h1>Counter {counter1}</h1>
    <h1>Counter {counter2}</h1>
    <hr/>
    <button className='btn btn-primary'
    onClick={()=>{
      setState({
        ...state, 
        counter1: counter1 + 1
      })
      
    }}
    >
        +1
    </button>
    </>
  )
}

export default CounterApp

//Incrementar los contadores sin perder el valor de los demás estados al escribir por ejemplo
//  onClick={()=>{setCounter({counter1: counter1 + 1}) entonces decimos que el nuevo valor del estado solo va a ser el counter 1. modificando todos los demás estados y perdiendo sus valores.¿Como podemos mantener?
//usando el ...spreadOperator , si en tu estado tenes multiples objetos entonces solo extraes lo que vas a usar en el caso solo usamos el counter1 y el counter2, entonces lo extraemos y en el setState decimos que guarde todo lo que haya en el ...state y que el nuevo valor de counter1 va a ser counter1: counter+1; conviene crear un estado llamado state si ahi adentro hay multiples objetos.