import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router'

export const RoutePublic = ({children}) => {

    const {user:{uid}} = useSelector(x => x)
    return uid ? <Navigate to="/calendar" /> : children

}
