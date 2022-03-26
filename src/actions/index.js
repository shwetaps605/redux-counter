

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

     
