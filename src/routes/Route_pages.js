import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Calendarscreem} from '../components/calendar/Calendarscreem'
import { Login } from '../components/auth/Login'
import { RoutePublic } from './RoutePublic'

export const Route_pages = () => {
    return (
        <>
            <Routes>
                <Route path="/login-register" element={
                    <RoutePublic>
                        <Login/>
                    </RoutePublic>
                } />
                <Route path="/" element={<Calendarscreem/>}/>
            </Routes>
        </>
    )
}
