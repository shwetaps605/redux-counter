
const counterState = {
    count: 0
}

const counterReducer= (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        default: return state
    }
}

export default counterReducer