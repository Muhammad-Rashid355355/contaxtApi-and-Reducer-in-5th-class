import React, { useContext } from "react";
import counterContext from './countercontex';

const Child=()=>{
    let countervalue = useContext(counterContext);
    console.log(countervalue);
    return(
        <div>
            <h2>First child using contextApi</h2>
            <h2>here your value:{countervalue[0]}</h2>
            <button onClick={()=> {countervalue[1](++countervalue[0])}}>increament</button>
        </div>
    )
}
export default Child;