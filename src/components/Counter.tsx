import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState, AppDispatch } from '../redux/store'
import { decrement, reset, incrementAsync } from '../redux/Counter/CounterSlice'

const Counter = () => {

  // Local State
  const [incrementAmount, setIncrementAmount] = useState(1);

  // Connect this conponent to Redux
  const count = useSelector((state: GlobalState) => state.counter.value)

  // Connect to Dispatch so we can dispatch actions to the redux store.
  // Dispatch enables React to talk to Redux since it can't do it by itself.
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <p>Count: {count}</p>
      <label htmlFor="number">Amount to increment: </label>
      <input value={incrementAmount} name="number" type="number" onChange={(e) => setIncrementAmount(e.target.valueAsNumber)} />
      <br />
      <button style={{margin: '10px'}} onClick={() => dispatch(incrementAsync(incrementAmount))}>Increment</button>
      <button style={{margin: '10px'}} onClick={() => dispatch(decrement())}>Decrement</button>
      <button style={{margin: '10px'}} onClick={() => {dispatch(reset())}}>Reset</button>
    </>
  )
}

export default Counter