import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, signIn } from './actions'
import { addBug, removeBug } from './actions'



function App() {
  // const counter = useSelector( state => state.counter)
  // const isLogged = useSelector( state => state.isLogged)
  // const dispatch = useDispatch()

  

  

  return (
    <div className="App">
      {/* <header>
        <h2>Counter:{counter}</h2>
        <button onClick={()=> dispatch(signIn())}>Log In</button>
      </header>

      <main>
        <button onClick= {()=> dispatch(increment(5))}>+</button>
        <button onClick= {()=> dispatch(decrement())}>-</button>
      </main>

      {
        isLogged && 
        <section>
            <p>Valuable Information</p>
        </section>
      } */}
    </div>
  );
}

export default App;
