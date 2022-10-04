import { useState } from "react"

const useForm = ( initialState = {}) => {
  
   const [values, setValues] = useState(initialState)
   
    const reset = ()=>{
        setValues(initialState)
    }

   const handleInputChange = ({target}) =>{

    setValues({
        ...values,
        [target.name]: target.value
    })
}
    return [values, handleInputChange, reset]
}

export default useForm

//Definimos como parametros en useForm el initialState que va ser igual a un {OBJETO} porque si no me mandan nada no quiero que reviente ni me marque un error, entonces simplemente decimos que vá a ser un OBJETO VACIO, Pero que será el initialState? es un objeto con el nombre de los campos que yo quiero.