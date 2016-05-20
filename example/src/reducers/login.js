import { combineReducers } from 'redux'
import { LOGIN_ASYN, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions'

const status =  (state = 'hass not login',action) =>{
    switch(action.type){
        case LOGIN_ASYN.type :
            return 'login ...'
        case LOGIN_SUCCESS.type :
            return 'login success !'
        case LOGIN_FAILED.type :
            return 'login failed .'
        default :
            return state
    }
}

const error_info = (state = '',action) => {
    switch(action.type){
        case LOGIN_FAILED.type:
            return action.info
        case LOGIN_SUCCESS.type:
            return ''
        default :
            return state
    }
}

export default combineReducers({
    status,
    error_info
})
