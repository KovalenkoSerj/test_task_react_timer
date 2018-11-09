import React, { Component } from 'react';
import StartButton from './StartButton';
import CircularProgressbar from 'react-circular-progressbar';



export default class App extends Component {

  timer = 0;
  state = { hours: 0, minutes: 0, seconds: 0, clicked: false };

  handleStart = e => {
    const { name, value } = e.target;
    this.setState({ [name]: +value })
  }
  startTimer = () => {
    this.timer = setInterval(this.timerSettings, 999)
  }

  timerSettings = () => {

    let seconds = this.state.seconds - 1;
    let minutes = this.state.minutes;
    let hours = this.state.hours;

    if (seconds === -1) return this.setState({ seconds: 59, minutes: minutes - 1 })
    if (hours !== 0 && minutes === 0) return this.setState({ hours: hours - 1, minutes: 60 })
    if (minutes === -1) return this.setState({ minutes: 0 })
    if (hours === 0 && minutes === 0 && seconds === 0) {
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
    return (
      clicked ?
        <div className='timer_container'>
          <div className='container'>
            <span className='hours' style={{ color: `rgb(33, 73, 235)` }}>HOURS</span>
            <CircularProgressbar className='circle'
              percentage={(this.state.hours * 100) / 24}
              text={`${this.state.hours}`}
              styles={{
                path: { stroke: `rgb(33, 73, 235, ${(this.state.hours * 100) / 24})` },
                text: { fill: 'fff', fontSize: '25px', },
                trail: { stroke: '#212125' }
              }} />
          </div>
          <div className='container'>
            <span style={{ color: `rgb(153, 227, 118)` }}>MINUTES</span>
            <CircularProgressbar className='circle'
              percentage={(this.state.minutes * 100) / 60}
              text={`${this.state.minutes}`}
              styles={{
                path: { stroke: `rgba(153, 227, 118, ${(this.state.minutes * 100) / 60})` },
                text: { fill: 'fff', fontSize: '25px' },
                trail: { stroke: '#212125' }
              }} />
          </div>
          <div className='container'>
            <span style={{ color: 'rgb(255, 220, 93)' }}>SECONDS</span>
            <CircularProgressbar className='circle'
              percentage={(this.state.seconds * 100) / 60}
              text={`${this.state.seconds}`}
              styles={{
                path: { stroke: `rgba(255, 220, 93, ${(this.state.seconds * 100) / 60})` },
                text: { fill: 'fff', fontSize: '25px' },
                trail: { stroke: '#212125' }
              }}
            />
          </div>
        </div>
        :
        <div className='container'>
          <input className='hours_input' type="number" name='hours' onChange={this.handleStart}  placeholder="hours" min='0' max='24' />
          <input className='minutes_input' type="number" name='minutes' onChange={this.handleStart} placeholder="minutes" min='0' max='60' />
          <input className='seconds_input' type="number" name="seconds" onChange={this.handleStart} placeholder="seconds" min='0' max='60' />
          <StartButton startTimer={this.startTimer} />
        </div>
    )
  }
}


