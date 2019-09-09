import React, { Component } from 'react';
import './Clicker.css';

class Clicker extends Component {

constructor(props) {
      super(props);
      this.state = {counter: 0};
      this.timesClicked = this.timesClicked.bind(this);
    }


timesClicked = (event) => {
  this.setState({counter: this.state.counter+1});
 }

 timesMinus = (event) => {
    if(this.state.counter > 0){
     this.setState({counter: this.state.counter-1});
    }
  }

 //getNumber = (counter) => {return counter % 2 === 0 && counter % 5 === 0 && counter !== 0 ? " pink" : !counter ? " counterButton" : counter % 2 === 0 ? " even" : " odd"}
 
 getNumber = (counter) => {
    if (counter % 10 === 0 && counter !== 0) {
     return " pink"
    } else if (!counter){
      return " counterButton"
     } else if (counter % 2 === 0){
       return " even"
     } else {
       return " odd"
     }
    }

 resetState = () => {
    this.setState( {counter: 0}
    );
  }


render () {
return (
    <div className="main">  
    <div className={"counterButton" + this.getNumber(this.state.counter)}>{this.state.counter}</div>
    <div className="buttons">
    <button onClick = {this.timesClicked}>add</button>
    <button onClick = {this.timesMinus}>remove</button>
    <button className="resetButton" onClick={this.resetState}>reset</button>
    </div>
  </div>
    );
  }
}

export default Clicker;
