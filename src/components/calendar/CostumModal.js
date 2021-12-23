import React from 'react'
import {useDispatch} from 'react-redux'
import { modal_action } from '../../redux/methodAction'

export const CostumModal = () => {

    const dispatch = useDispatch()

    const closeModal = () => {
        
        dispatch(modal_action(false))
    }

    return (
        <div className='overlay_modal' onClick={closeModal}>
            <div className='model'>
                <h1>Modal</h1>
            </div>
        </div>
    )
}
