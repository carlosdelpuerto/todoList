import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm'
import './effects.css'


const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email: '',
        password: ''
     })

     const {name, email, password} = formValues
     //para probar el useEffect con un customHook. si funciona. en el caso realizamos un cambio en el mail que consolee un texto cada vez que el formulario cambie, entonces al final le pasamos como dependecia 'email' para que esuche el evento cada vez que el email cambie.
     useEffect(()=>{
            console.log('email cambió')
     }, [email])

     const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formValues)
     }

  return (
    <form onSubmit={handleSubmit}>

    <h1>FormWithCustomHook</h1>
    <hr/>

    <div className='form-label'>
        <input 
        type='text'
        name='name'
        className='form-control'
        placeholder='Tu nombre'
        autoComplete='off'
        value= {name}
        onChange={handleInputChange}
        >

        </input>
    </div>

    <div className='form-label'>
        <input 
        type='text'
        name='email'
        className='form-control'
        placeholder='tuemail@gmail.com'
        autoComplete='off'
        value= {email}
        onChange={handleInputChange}
        >

        </input>
    </div>

    <div className='1form-label'>
        <input 
        type='password'
        name='password'
        className='form-control'
        placeholder='Password'
        value= {password}
        onChange={handleInputChange}
        >

        </input>
    </div>
    <button type='submit' className='btn btn-primary'> Enviar</button>

    </form>
  )
}

export default FormWithCustomHook

