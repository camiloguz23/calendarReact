
import { Fetch_custom } from "../helpers/fecth_api"
import { action_type } from "./action"
import moment from "moment"
moment.locale("es")

export const modal_action_active = (action) => ({
    type:action_type.model_active
})

export const modal_action_desactive = (action) => ({
    type:action_type.model_desactive
})

/* export const EventAdd_action = (event) => ({
    type:action_type.EventAdd,
    payload:event
}) */

export const EventAdd_action = (event) => {
    return async (dispatch) => {
        console.log(event)
        const {title,start,end,notes} = event
        const resp = await Fetch_custom("calendar/",{title,start,end,notes},"POST")
        const data = await resp.json()

        dispatch({
            type:action_type.EventAdd,
            payload:{
                ...event,
                _id:data.msg._id
            }
        })
        console.log(data)
    }
}

export const EventSelect_action = (event) => ({
    type:action_type.Event_Select,
        payload:event
})

export const Event_clean_select = () => {
    return {
        type:action_type.Event_clean
    }
}

export const Eventupdate = (event) =>  {

    return async (dispatch) => {

        const {_id,title,notes,start,end} = event

        const resp = await Fetch_custom(`calendar/${_id}`,{title,start,end,notes},"PUT")
        const data = await resp.json()
        console.log(_id)

        if(data.ok) {

            dispatch(
                {
                    type:action_type.Event_update,
                    payload:event
                }

            )
        }
    }
}

export const Event_Delete = (event) => {
    return async (dispatch) => {

        const {_id} =event

        const resp = await Fetch_custom(`calendar/${_id}`,{},"DELETE")
        const data = await resp.json()

        if(data.ok) {

            dispatch({

                type:action_type.Event_delete
            })
        }

        console.log(data)

    }
}

export const Add_for_select = (event) => {

    return {
        type:action_type.Event_add_select,
        payload:event
    }
}

export const UserError_action = (event) => {
    return {
        type:action_type.UserError,
        payload:event
    }
}
export const loginUser_Action = (email,password) => {

    return async (dispatch) => {
        const resp = await Fetch_custom("user/login-user",{email,password},"POST")
        const data = await resp.json()

        if (data.ok) {

            localStorage.setItem("JWT",data.msg.Jtoken)

            if (!data.ok) {

                if (data.msg.name) {
                    dispatch(UserError_action(data.msg.name.msg))
                    
                } else {
                    
                    dispatch(UserError_action(data.msg))
                }
                
            }else {
                console.log(data)

                dispatch({
                    type:action_type.Userlogin,
                    payload:{
                        uid:data.msg.uid,
                        name:data.msg.name
                    }
                })
            }

        }
       
    }
}

export const createUser_action = (name,email,password) => {

    return async (dispatch) => {
        console.log(name,email,password)
        const resp = await Fetch_custom("user/new-user",{name,email,password},"POST")
        const data = await resp.json()

        if (!data.ok) {

            if (data.msg.name) {
                dispatch(UserError_action(data.msg.name.msg))
                
            } else {
                
                dispatch(UserError_action(data.msg))
            }
            
        }
    }
}

export const logout_action = () =>({
    type:action_type.Userlogout
})

const string_to_date = (lista =[]) => {

    const trasnformacion = lista.map(x => ({
        ...x,
        start:moment(x.start).toDate(),
        end:moment(x.end).toDate()
    }))

    return trasnformacion

}

export const loading_DB = () => {
    return async (dispatch) => {

        const resp = await Fetch_custom("calendar/",{},"GET")
        const data = await resp.json()

        const {get_data} = data

        const calen_dat = string_to_date(get_data)
        
        dispatch({
            type:action_type.EventLoadDB,
            payload:calen_dat
        })
        

    }
}