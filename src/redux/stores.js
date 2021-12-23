import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Calendar_reducer } from './calendarReduce';
import { Model_windows,user_reducer} from './reduce';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

const reduce = combineReducers({
    model: Model_windows,
    Event: Calendar_reducer,
    user:user_reducer
})

export const store = createStore(reduce,composeEnhancers(applyMiddleware(thunk)))