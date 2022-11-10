import './App.css';
import React , { useState } from 'react'

function App() {

  const[result,setResult] = useState("")

  const handleClick = (e) => {
   setResult()a
  }
  return (
    <>
    <div className="container">
         <form>
           <input type="text" value={result}/>
         </form>

       <div className="keypad">
         <button id="clear"  >AC</button>
         <button id="backspace">C</button>
         <button className="symbols" value="/" >/</button>
         <button className='digits' value="7" >7</button>
         <button className='digits' value="8" >8</button>
         <button className='digits' value="9" >9</button>
         <button className="symbols" value="*" >x</button>
         <button className='digits' value="4" >4</button>
         <button className='digits' value="5" >5</button>
         <button className='digits' value="6" >6</button>
         <button className="symbols" value="-" >-</button>
         <button className='digits' value="1" >1</button>
         <button className='digits' value="2" >2</button>
         <button className='digits' value="3" >3</button>
         <button className="symbols" value="+" >+</button>
         <button className='digits' value="0" >0</button>
         <button className='digits' value="." >.</button>
         <button id='submit' >=</button>

       </div>
    </div>
 </>
  );
}

export default App;
