import { action_type } from "./action";
import moment from 'moment'

moment.locales("es")

const actvive_model = {
    active:false
}
export const Model_windows = (state = actvive_model,action) => {

    switch (action.type) {
        case action_type.model_active:
            
            return{
                ...state,
                active:true
            }

        case action_type.model_desactive:
            return{
                ...state,
                active:false
            }

        
    
        default:
            return{
                ...state
                
            }
    }


}

//^ user reduce

const user_base = {
    login:false,
    error:null,
    uid:null,
    name:null
}


export const user_reducer = (state = user_base,action) => {

    switch (action.type) {
        
        case action_type.Userlogin:
            return{
                ...state,
                uid:action.payload.uid,
                name:action.payload.name,
                error:null

            }
        
        case action_type.UserError:
            return{
                ...state,
                error:action.payload
            }
    
        case action_type.Userlogout:
            return {
                ...state,
                uid:null,
                name:null
            }
            
        default:
            return state;
    }
}
