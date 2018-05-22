

const ADD_GUN = 'ADD_GUN';
const REMOVE_GUN = 'REMOVE';


export function counter(state = 10, action) {
    console.log(state,action)
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case REMOVE_GUN:
            return state - 1
        default:
            return state
    }
}

//action creater
export function addGun() {
    return { type: ADD_GUN }
}
export function removeGun() {
    return { type: REMOVE_GUN }
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}