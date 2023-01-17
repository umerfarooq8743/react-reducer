import React , {useReducer}from 'react';
import './style.css';

const reducer=(state,action)=>{
    if(action.type==="incr"){
        state=state+1;
    }
    if(state>0 && action.type==="decr"){
        state=state-1
    }
    return state
}

const Reducer = () => {
    const [state,dispatch]=useReducer(reducer,0)
  return (
    <>
    <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={()=>dispatch({type:"incr"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           Increment
        </div>
        <div className="button2" onClick={()=>dispatch({type:"decr"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
             Decrement
        </div>
    </div>
    </>
  )
}

export default Reducer