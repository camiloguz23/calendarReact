import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { FormLogin } from './FormLogin'
import { FormRegister } from './FormRegister'

export const Login = () => {

    const {user:{error}} = useSelector(x => x)

    const [form, setform] = useState(true)
    return (
        <>
            <h2 className='Title'>Login and Register</h2>
            <hr/>
            <div className='login'>
               {form ? <FormLogin setform={setform}/>:<FormRegister setform={setform}/>}
               {error && <p className='msg_error'>{error}</p>}
            </div>
            
        </>
    )
}
