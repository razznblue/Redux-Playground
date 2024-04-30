import './App.css'
import Counter from './components/Counter'

// // STATE
// interface CounterState {
//   value: number
// }

// // ACTIONS
// const increment = { type: 'INCREMENT' }
// const decrement = { type: 'DECREMENT' }
// const reset = { type: 'RESET', payload: 0 }
// const incrementByAmount = { type: 'INCREMENT_AMOUNT', payload: 10 }

// // REDUCERS
// // Taking an action, and update the redux store depending on the TYPE on the action
// // The state is never changes. The reducers make a copy of the state, apply the changes, then return a copy of the state.

function App() {
  return (
    <>
      <h3>My Redux App</h3>
      <Counter />
    </>
  )
}

export default App
