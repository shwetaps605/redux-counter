import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incremented: state =>{ state.count += 1},
        decremented: state => { state.count -= 1    },
        incrementBy: (state,action) =>{ state.count += action.payload },
        reset: () => initialState,
        // reset: () =>({...initialState}),
        // reset: state => Object.assign(state,initialState)
    }
})


export const { incremented, decremented, incrementBy, reset} = counterSlice.actions

//The below function is called a selector and allows us to select a value from the state.
//Selectors can also be defined inline where they're used instead of in the slice file
export const selectCount = state => state.counter.count

export default counterSlice.reducer

