import React,{useReducer} from 'react';
import counterReducer from './counterReducer';
const Child2 =()=>{
    let [state , dispatch]= useReducer(counterReducer ,2);
    return(
<div>
    <h2>This is second child using Reducer</h2>
<h1>Your Reducer Value is: {state} </h1>
<button onClick={()=>dispatch('INCREMENT')}>increament Reducer</button>
</div>
    )
}
export default Child2;