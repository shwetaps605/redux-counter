import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incremented, decremented, incrementBy, selectCount } from '../features/counter/counterSlice'


const Counter = () => {
    //the useSelector hook allows the component to extract whatever pieces of data it needs from the Redux store state
    //because our components cannot talk to the redux store directly therefore useSelector does it behind the scenes for us
    const count = useSelector(state => state.counter.count)
    console.log("COUNT:", count)
    const dispatch = useDispatch()
    const [incrementByAmount, setIncrementByAmount] = useState(2)
    
  return (
    <div>
        <header>
            <h2>Counter : {count}</h2>
        </header>
        <main>
            <button 
                onClick={() => dispatch(incremented())}>Increment
            </button>
            <button 
                onClick={() => dispatch(decremented())}>Decrement
            </button>
        </main>
    </div>
  )
}

export default Counter