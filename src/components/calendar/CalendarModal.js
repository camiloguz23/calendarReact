import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment'
import Modal from 'react-modal';
import { EventAdd_action, modal_action_desactive,Event_clean_select, Eventupdate,Event_Delete} from '../../redux/methodAction';


moment.locales("es")

const datestart = moment().minutes(0).seconds(0).add(1,"hours")
const dateEnd = datestart.clone().add(1,"hours")

Modal.setAppElement('#root');

export const CalendarModal = (props) => {

  const base_register = {
    start:datestart.toDate(),
    end:dateEnd.toDate(),
    title:"",
    notes:"",
  }

  const [Info, setInfo] = useState(base_register)
  const {model:{active}, Event:{activeEvent,Select_Event}} = useSelector(x => x)
  const dispatch = useDispatch()

  useEffect(() => {

    if (activeEvent) {       
      setInfo(activeEvent)   
    }else if(Select_Event){
      const {start} = Select_Event
      const end = moment(start).add(1,"hours").toDate()
      setInfo({
        ...Select_Event,
        end
      })   
    }
    else {
      setInfo(base_register)
    }

  }, [activeEvent,Select_Event])

  const closeModal = () => {
        
    dispatch(modal_action_desactive())
    dispatch(Event_clean_select())
    setInfo(base_register)
  }

  const Time_init = (e) => {

    setInfo({
      ...Info,
      start:e
    })
  }

  const Time_end = (e) => {
      
    setInfo({
      ...Info,
       end:e
    })
  }

  const get_value_input = ({target}) => {

    setInfo({
      ...Info,
      [target.name] : target.value,
        
    })

  }

  const delete_event_btn = () => {

    dispatch(Event_Delete(activeEvent))
    dispatch(modal_action_desactive())

  }

  const enviar = (e ) => {
    e.preventDefault()

    if (activeEvent) {
      dispatch(Eventupdate({ 
        ...Info
      }))
        
    } else {
      dispatch(EventAdd_action({
        ...Info,
      })
      )
    }
    setInfo(base_register)
  }
    
 
  return (
    <Modal
    isOpen={active} //^ if is true visible, if is false invisible
    onRequestClose={closeModal} //^ for close window modal when we do click out of modal
    className={`model animate__animated ${active?"animate__zoomIn": "animate__zoomOut"}`}
    overlayClassName="overlay_modal"
    closeTimeoutMS={500}
    >
      <h2>{activeEvent ? "Edit register": "New register" }</h2>
      <form autoComplete='off' onSubmit={enviar}>
        <label>Date init</label>
        <DateTimePicker onChange={Time_init} value={ Info.start  } className="reloj"/>
        <label>Date end</label>
        <DateTimePicker onChange={Time_end} value={Info.end } minDate={ Info.start  } className="reloj"/> 
        <label>Title</label>
        <input type="text" name='title' className='sinborder' placeholder='Enter title' value={Info.title  } onChange={get_value_input }/>
        <label>Description</label>
        <textarea name='notes' value={Info.notes } placeholder='Enter description' onChange={get_value_input }></textarea>
        <button className='send' type='submit'>Click</button>
        { activeEvent && <button className='send delete' type='button' onClick={delete_event_btn}>Delete</button>}

      </form>
      
    </Modal>
  )
}
