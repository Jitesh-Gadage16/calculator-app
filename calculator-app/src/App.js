import './App.css';
import React , { useState } from 'react'

function App() {

  const[result,setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.value))
    console.log(result.concat(e.target.value))
  }

  const clear = () => {
    setResult("")
  }

  const backsapce = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {

    let value = eval(result)
   setResult(value.toString())
  console.log(eval(result))
    
  }


  return (
    <>
    <div className="container">
         <form>
           <input type="text" value={result}/>
         </form>

       <div className="keypad">
         <button id="clear" onClick={clear} >AC</button>
         <button onClick={backsapce} id="backspace">C</button>
         <button className="symbols" value="/" onClick={handleClick}>/</button>
         <button className='digits' value="7" onClick={handleClick}>7</button>
         <button className='digits' value="8" onClick={handleClick}>8</button>
         <button className='digits' value="9" onClick={handleClick}>9</button>
         <button className="symbols" value="*" onClick={handleClick}>x</button>
         <button className='digits' value="4" onClick={handleClick}>4</button>
         <button className='digits' value="5" onClick={handleClick}>5</button>
         <button className='digits' value="6" onClick={handleClick}>6</button>
         <button className="symbols" value="-" onClick={handleClick}>-</button>
         <button className='digits' value="1" onClick={handleClick}>1</button>
         <button className='digits' value="2" onClick={handleClick}>2</button>
         <button className='digits' value="3" onClick={handleClick}>3</button>
         <button className="symbols" value="+" onClick={handleClick}>+</button>
         <button className='digits' value="0" onClick={handleClick}>0</button>
         <button className='digits' value="." onClick={handleClick}>.</button>
         <button id='submit' onClick={calculate}>=</button>

       </div>
    </div>
 </>
  );
}

export default App;
