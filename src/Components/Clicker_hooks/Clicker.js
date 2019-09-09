import React, { useState } from 'react';
import './Clicker.css';


function Clicker() {
const [count, setCount] = useState(0);

function getNumber(count) {
  if (count % 10 === 0 && count !== 0) {
         return " pink"
        } else if (!count){
          return " countButton"
         } else if (count % 2 === 0){
           return " even"
         } else {
           return " odd"
         }
        }
 

return (
    <div className="main">  
    <div className={"counterButton" + getNumber(count)}>{count}</div>
    <div className="buttons">
    <button onClick = {() => setCount(count + 1)}>add</button>
    <button onClick = {() => setCount(count - 1)}>remove</button>
    <button className="resetButton" onClick={() => setCount(0)}>reset</button> 
    </div>
  </div>
    );
}

export default Clicker;