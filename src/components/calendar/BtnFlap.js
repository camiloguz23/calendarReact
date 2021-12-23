import React from 'react'
import { useDispatch} from 'react-redux'
import { modal_action_active } from '../../redux/methodAction'

export const BtnFlap = () => {

    const dispatch = useDispatch()

    const Active = () => {

        dispatch(modal_action_active())

    }
    return (
        <button className='btn_flap' onClick={Active}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
