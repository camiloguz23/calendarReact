import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Route_pages } from './routes/Route_pages'

import './sass/style.scss'
import { store } from './redux/stores'

export const Calender = () => {
    return (
        <>
        <BrowserRouter>

        <Provider store={store}>
            <Route_pages/>
        </Provider>

        </BrowserRouter>
            
        </>
    )
}
