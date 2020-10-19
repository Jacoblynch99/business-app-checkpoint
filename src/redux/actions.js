export const addPlace = (place) => {
    return {
        type: 'ADD_PLACE',
        value: place,
    }
}

export const removePlace = (index) => {
    return {
        type: 'REMOVE_PLACE',
        value: index,
    }
}

export const login = (bool) => {
    return {
        type: 'LOGIN',
        value: bool,
    }
}
