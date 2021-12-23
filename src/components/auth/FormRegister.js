import React from 'react'
import {useDispatch} from 'react-redux'
import { UseForm } from '../../hooks/useForm'
import { createUser_action } from '../../redux/methodAction'

export const FormRegister = (props) => {
    const {setform} = props
    const dispatch = useDispatch()
   

    const {value_input,get_value_input,reset} = UseForm({
        name:"",
        email:"",
        password:""
    })

    const action_submit = (e) => {
        e.preventDefault()
        const {name,email,password} = value_input
        dispatch(createUser_action(name,email,password))

        reset()
    }

    return (
        <>
            <form onSubmit={action_submit} autoComplete='off' className='animate__animated animate__fadeIn'>

                <label htmlFor="name">Name </label>
                <input type="text" id="name" name="name" placeholder='Enter name' value={value_input.name} onChange={get_value_input}/>
                
                <label htmlFor="correo">Email </label>
                <input type="email" id="correo" name="email" placeholder='Enter email' value={value_input.email} onChange={get_value_input}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder='Enter password' value={value_input.password} onChange={get_value_input}/>
                
                <button type='submit'>Register</button>
                <div onClick={() => setform(true)} className='change'>
                    <p>Login</p>
                </div>
            </form>
        </>
    )
}
