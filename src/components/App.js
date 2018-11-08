import React, { Component } from 'react';
import  StartButton  from './StartButton'



export default class App extends Component {

timer = 0;
state = {  hours: 0, minutes: 0, seconds: 0, clicked: false };
  
handleStart = e => {
  const { name, value } = e.target;
  this.setState({ [name]: +value })
}
startTimer = () => {
  this.timer = setInterval(this.timerSettings, 999)
}

timerSettings = () => {

  let seconds = this.state.seconds -1;
  let minutes = this.state.minutes;
  let hours =  this.state.hours;
  if( seconds === -1 ) return this.setState({ seconds: 59, minutes: minutes-1 })
  if( hours !== 0 && minutes === 0) return this.setState({ hours: hours-1, minutes: 60 })
  if( minutes === -1 ) return this.setState({minutes: 0})
  if (hours === 0 && minutes === 0 && seconds === 0 ) { 
    clearInterval(this.timer);
  }
  this.setState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    clicked: true
   });

}

  render() {
    console.log(this.state)
    const { clicked } = this.state
    return(
    clicked ?  
        <div>
          <p>Hours: { this.state.hours }</p>
          <p>Minutes: { this.state.minutes }</p>
          <p>Seconds: { this.state.seconds }</p>
        </div>
      :
        <div>
          <input type="number" name='hours' onChange={ this.handleStart } placeholder="hours" />
          <input type="number" name='minutes'  onChange={ this.handleStart } placeholder="minutes" />
          <input type="number" name="seconds"  onChange={ this.handleStart } placeholder="seconds" />
          <StartButton startTimer={ this.startTimer } />
        </div>
    )
  }
}
  

