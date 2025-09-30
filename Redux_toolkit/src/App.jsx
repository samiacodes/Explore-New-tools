
import './App.css'
import { NavBar } from './components/NavBar'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice';

function App() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
  return (
    <>
    <NavBar/>
    <button className='bg-background text-foreground' onClick={()=>dispatch(increment())}>-</button>
      <div>
        {count}
      </div>
    <button className='bg-background text-foreground' onClick={()=>dispatch(decrement())}>+</button>
    <button className='bg-background text-foreground' onClick={()=>dispatch(incrementByAmount(10))}>+</button>
    <button className='bg-background text-foreground' onClick={()=>dispatch(multiply())}>* Multiply</button>
    </>
  )
}

export default App
