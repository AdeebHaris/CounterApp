import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../redux/counterSlice";
import { useState } from "react";

function Counter() {
  // component can access the state by useSelector hook
  const counterValue = useSelector((state)=>state.counter.value)
  const [range,setRange] = useState(1)
  // useDispatch() is a hook used to call a method in action to update the state
  const dispatch = useDispatch();
  return (
    <>
    <div className="d-flex flex-column align-items-center justify-content-center w-100 mt-3">
        <h2 style={{fontSize:"75px",color:"black"}}>{counterValue}</h2>
        <div className="mt-5">
            <button className="btn btn-warning p-3 ms-2"style={{width:"120px"}} onClick={()=>dispatch(decrement(Number(range)))}>DECREMENT</button>
            <button className="btn btn-success p-3 ms-2"style={{width:"120px"}} onClick={()=>dispatch(increment(Number(range)))}>INCREMENT</button>
            <button className="btn btn-danger p-3 ms-2" style={{width:"120px"}} onClick={()=>dispatch(reset())}>RESET</button>
        </div>
    </div>
    <input type="text" className="form-control mt-3 w-100" style={{borderColor:"blue"}} placeholder="Enter The Range" 
    onChange={(e)=>setRange(e.target.value)}/>
    </>
  )
}

export default Counter