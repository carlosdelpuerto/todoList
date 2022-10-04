import { useState } from "react"


const useCounter = (InitialState = 10) => {

const [counter, setCounter] =  useState(InitialState) //10

const increment = () =>{
    setCounter( counter + 1)
}

const decrement = () =>{
    setCounter( counter - 1)
}

const reset = () =>{
    setCounter(InitialState)
}

return{
    counter,
    increment,
    decrement,
    reset
}

}

export default useCounter

//el valor por defecto va a ser initialState, si no le mandan nada el valor será de 10.