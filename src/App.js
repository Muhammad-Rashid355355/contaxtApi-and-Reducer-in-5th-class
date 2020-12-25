import React,{useState} from "react";
import './App.css';
import Parent from './Parent';
import counterContext from "./countercontex"


function App() {
  // let [count,setCount]=useState(35)
  let counterData = useState(1)         // [count,setCount]
  
  return (
    
<counterContext.Provider value={counterData}>
  <div>
    <Parent />
  </div>

</counterContext.Provider>
   
  );
}

export default App;
