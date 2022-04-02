import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count: 0
    },
    reducers:{
        incremented: state =>{ state.count += 1},
        decremented: state => { state.count -= 1    },
        incrementBy: (state,action) =>{ state.value += action.payload.value }
    }
})



export const { incremented, decremented, incrementBy} = counterSlice.actions

//The below function is called a selector and allows us to select a value from the state.
//Selectors can also be defined inline where they're used instead of in the slice file
export const selectCount = state => state.counter.count

export default counterSlice.reducer

