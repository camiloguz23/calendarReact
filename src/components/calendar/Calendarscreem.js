import React, { useState,useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import { Navbar } from '../ui/Navbar'
import {messages} from '../../languages/spanish'
import { CalendarEvent } from './CalendarEvent'
import { useDispatch,useSelector } from 'react-redux'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarModal } from './CalendarModal'
import {  Add_for_select, EventSelect_action, modal_action_active,loading_DB } from '../../redux/methodAction'

import { BtnFlap } from './BtnFlap'
import { Fetch_custom } from '../../helpers/fecth_api'

moment.locale("es")

export const Calendarscreem = () => {

    const [lastview, setlastview] = useState(localStorage.getItem("lastview") || "month" )
    const dispatch = useDispatch()
    const {Event:{events_New}} = useSelector(x => x)
    const localizer = momentLocalizer(moment)
    const x = 0
    useEffect(() => {

       
        dispatch(loading_DB())
        
    }, [x])

    const event = [
        ...events_New
    ]

    const style_event = ( event,start,end,isSelected) => {

        const style = {
            backgroundColor:"#ff9a3e",
            color:"black",
            display:"block"
        }

        return {
            style
        }

    }

    const DoubleClick = (e ) => {
       
        dispatch(modal_action_active()) 
    }

    const Selected = (e) => {
        dispatch(EventSelect_action(e))
    }

    const view = (e) => {
        setlastview(e)
        localStorage.setItem("lastview",e)
    }

    const select_date = ( e) => {
        dispatch(Add_for_select(e))
        dispatch(modal_action_active())
    }

    return (
        <>
            <Navbar/>

            <Calendar

                localizer={localizer}
                events={event}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages={messages}
                eventPropGetter={style_event}
                components={{
                    event:CalendarEvent
                }}
                onDoubleClickEvent={DoubleClick}
                onSelectEvent={Selected}
                onView={view}
                view={lastview} //^ value of useState
                onSelectSlot={select_date}
                selectable={true}
                
            /> 

            <CalendarModal />
            
            <BtnFlap/>
            
        </>
    )
}
