import React, {useEffect, useState} from 'react'
import './effects.css'
import Message from './Message'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email: '',
     })

     const {name, email} = formState

    useEffect(()=>{
        //console.log('HEY!')
    }, [])

    useEffect(()=>{
       // console.log('El formulario cambió!')
    }, [formState])

    useEffect(()=>{
        //console.log('HEY! cambió el email')
    }, [email])


    const handleInputChange = ({target}) =>{

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

  return (
    <>
    <h1>useEffect</h1>
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

    {(name === '123') && <Message/>}
    </>
  )
}

export default SimpleForm

//!Nunca usar un hook de manera condicional.