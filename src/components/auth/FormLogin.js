import React from 'react'
import {useDispatch} from 'react-redux'
import { UseForm } from '../../hooks/useForm'
import { loginUser_Action } from '../../redux/methodAction'
import {useNavigate} from 'react-router-dom'

export const FormLogin = (props) => {
    const {setform} = props

    const dispatch = useDispatch()
    const link = useNavigate()

    const {value_input, get_value_input,reset} = UseForm({
        email:"",
        password:""
    })

    const action_submit = (e) => {
        e.preventDefault()
        const {email,password} = value_input
        dispatch(loginUser_Action(email,password))
        link("/calendar")
        reset()
    }
    return (
        <>
            <form onSubmit={action_submit} autoComplete='off' className='animate__animated animate__fadeIn'>
                <label htmlFor="correo">Email </label>
                <input type="email" id="correo" name="email" placeholder='Enter email' value={value_input.email} onChange={get_value_input}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder='Enter password' value={value_input.password} onChange={get_value_input}/>
                
                <button type='submit'>Login</button>
                <div onClick={() => setform(false)} className='change'>
                    <p>Register</p>
                </div>
            </form>
        </>
    )
}
