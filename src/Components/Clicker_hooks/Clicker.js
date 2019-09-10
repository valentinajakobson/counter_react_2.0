import React, { useState } from 'react';
import './Clicker.css';


const Clicker = () => {
const [count, setCount] = useState(0);

const getNumber = (count) => 
    {return count % 10 === 0 && count !== 0 
    ? " pink" 
    : !count 
    ? " counterButton" 
    : count % 2 === 0 
    ? " even" 
    : " odd"}

return (
    <div className="main">  
    <div className={"counterButton" + getNumber(count)}>{count}</div>
    <div className="buttons">
    <button onClick = {() => setCount(count + 1)}>add</button>
    <button onClick = {count > 0 ? () => setCount(count - 1) : () => setCount(0)}>remove</button>
    <button className="resetButton" onClick={() => setCount(0)}>reset</button> 
    </div>
  </div>
    );
}

export default Clicker;