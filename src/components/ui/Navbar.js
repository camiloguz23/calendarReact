import React from 'react'
import {useDispatch} from 'react-redux'
import { logout_action } from '../../redux/methodAction'
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {

    const dispatch =useDispatch()
    const link = useNavigate()

    const click_logout = () => {

        dispatch(logout_action())
        link("/")

    }
    return (
        <>
            <nav className='navbar'>
                <p>Calendar</p>
                <button onClick={click_logout}>
                <i className="fas fa-sign-out-alt"></i> exit
                </button>
            </nav> 
        </>
    )
}
