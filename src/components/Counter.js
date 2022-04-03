import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incremented, decremented, incrementBy, selectCount, reset } from '../features/counter/counterSlice'
import counterSlice from '../features/counter/counterSlice'

const Counter = () => {
    //the useSelector hook allows the component to extract whatever pieces of data it needs from the Redux store state
    //because our components cannot talk to the redux store directly therefore useSelector does it behind the scenes for us
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementByAmount, setIncrementByAmount] = useState(2)

    console.log(counterSlice)
    
    
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
            <br/>
            <input
                placeholder='enter a number' 
                type='number'
                onChange={(e) => {
                    setIncrementByAmount(parseInt(e.target.value))}}
            />
            <button 
                onClick={() => dispatch(incrementBy(incrementByAmount)) }>
                    Increment by 
            </button>
            <br/>
            <button onClick={() => dispatch(reset())}>
                Reset Count
            </button>
        </main>
    </div>
  )
}

export default Counter