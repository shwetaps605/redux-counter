import * as actions from './actionTypes'

export const increment = (incrementValue) => {
    return {
        type:'INCREMENT',
        payload: incrementValue
    }
}

export const decrement = () => {
    return {
        type:'DECREMENT'
    }
}

export const signIn = () => {
    return {
        type:'SIGN_IN'
    }
}

// export const addBug = (description) => {
//     return {
//         type:actions.BUG_ADDED,
//         payload: {
//             description: description
//         }
//     }
// }

// export const removeBug = (bugId) => {
//     return {
//         type:actions.BUG_REMOVED,
//         payload: {
//             id: id
//         }
//     }
// }

export const addBug = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description: description
    }
})

export const removeBug = id => ({
    type:actions.BUG_REMOVED,
    payload: {
        id:id
    }
})

export const resolveBug = id => ({
    type:actions.BUG_RESOLVED,
    payload: {
        id:id
    }
})
     
