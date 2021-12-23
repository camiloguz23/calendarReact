import moment from "moment"
import { action_type } from "./action"
const calendar = {
    events_New:[{

        title:"Today",
        start:moment().toDate(),
        end: moment().add(1,"hours").toDate(),
        notes:"",
        id:1
    }],
    activeEvent:null,
    Select_Event :null
}

export const Calendar_reducer = (state = calendar,action) => {

    switch (action.type) {

        case action_type.Event_Select:
            return {
                ...state,
                activeEvent : action.payload,
                Select_Event:null
            }
        
        case action_type.EventAdd:
            return {
                ...state,
                events_New:[
                    ...state.events_New,
                    action.payload
                ]
            }
        
        case action_type.Event_clean:
            return {
                ...state,
                activeEvent : null
            }
        
        case action_type.Event_update :
            return{
                ...state,
                events_New: state.events_New.map(x => (x._id === action.payload._id)? action.payload : x)
                
            }
        
        case action_type.Event_delete :
            return{
                ...state,
                events_New: state.events_New.filter(x => (x._id !== state.activeEvent._id)),
                activeEvent:null
                
            }
        
        case action_type.Event_add_select:

            return{
                ...state,
                Select_Event:action.payload,
                activeEvent:null
            }
        
        case action_type.EventLoadDB:
            return{
                ...state,
                events_New:[
                    ...state.events_New,
                    ...action.payload
                ]

            }
        
        default:
            return {
                ...state
                
            }
    }

}