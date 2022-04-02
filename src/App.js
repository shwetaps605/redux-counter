import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement, signIn } from './actions'
// import { addBug, removeBug } from './actions'
import Counter from './components/Counter';



function App() {
  
  

  return (
    <div className="App">
      <Counter/>
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
