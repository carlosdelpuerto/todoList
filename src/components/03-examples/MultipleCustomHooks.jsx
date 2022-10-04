import React from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './multiples.css'
const MultipleCustomHooks = () => {

   const {counter, increment} = useCounter(1)

    //el useFetch, retorna lo ultimo que retornamos en useFecth.jsx por ende es const ( y lo que retornamos)
    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    

    // la doble negacion de !!data quiere decir que convierte su valor en lugar de 'null' pasa a ser 'False' y con el operador && dice que traiga false si no hay valor o te traiga un valor en la posicion 0 en resumen. si existe la data que lo traiga [0] si no existe las 2 variables van a tener el valor de undefined.
    const {author, quote} = !!data && data[0]
    console.log(author, quote)




  return (
    <div>
    <h1 >Breakin-Bad Quotes</h1>
    <hr/>

    { loading ? ( 

      <div className='alert alert-info text-center'>
         loading...
      </div>
    ):(

      <blockquote className='blockquote text-center'>
          <p className='mb-10'>{quote} </p>
          <footer className='blockquote-footer'>{author}</footer>
      </blockquote>

    ) }

      <button  
      onClick={increment}
      className='btn btn-primary fixed'>
          Next Quote
      </button>


   </div>
  )
}

export default MultipleCustomHooks

//LOGICA DEL NEXTQUOTE: implementar un contador que vaya creciendo, entonces si hay una api por ID va ir en decreciente y siempre va traer quotes diferentes! Y con un math random te va a traer un id random dependiendo de lo que estés buscando! 