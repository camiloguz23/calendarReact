import React from 'react'

export const CalendarEvent = ({event}) => {
    
    const {title,notes} = event

    return (
        <>
           <h4>{title}</h4> 
           
           <span>{notes}</span>
        </>
    )
}
