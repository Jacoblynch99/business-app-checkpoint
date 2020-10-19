import { combineReducers } from 'redux'

const places = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLACE':
            return [...state, action.value]
        case 'REMOVE_PLACE':
            const places = [...state]
            places.splice(action.value, 1)
            return places
        default:
            return state
    }
}

const loggedIn = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return (state = action.value)
        default:
            return state
    }
}

export default combineReducers({ places, loggedIn })
