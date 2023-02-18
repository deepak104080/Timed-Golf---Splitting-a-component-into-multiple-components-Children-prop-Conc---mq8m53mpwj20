import React, { Component, useState } from "react";
import "../styles/App.css";
let timer;
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
  }
  
  componentDidMount() {
    
  }

  componentDidUpdate() {
    // if x and y == 250
    // then stop timer
    console.log('x and y - ', this.state.x, this.state.y)
    if(this.state.x === 250 && this.state.y === 250) {
      console.log('Gamer Over');
      clearInterval(timer);
      document.removeEventListener('keydown', this.moveBall)
    }
  }

  componentWillUnmount() {
    
  }

  startTimer = () => {
    document.addEventListener('keydown', this.moveBall)
    timer = setInterval(()=>{
      this.setState({
        ...this.state,
        time: this.state.time + 1
      })
    }, 1000)
    // this.setState({
    //   ...this.state,
    //   retTimer: temp
    // })
  }

  moveBall = (e) => {
    let code = e.keyCode;
    // console.log(code);
    if(code === 37) {
      this.setState({
        ...this.state,
        x: this.state.x - 5
      })
    }
    if(code === 38) {
      this.setState({
        ...this.state,
        y: this.state.y - 5
      })
    }
    if(code === 39) {
      this.setState({
        ...this.state,
        x: this.state.x + 5
      })
    }
    if(code === 40) {
      this.setState({
        ...this.state,
        y: this.state.y + 5
      })
    }
    //if left arrow key - update x by -5px - 37
    //if right arrow key - update x by 5px - 39
    //if top arrow key - update y by -5px - 38
    //if bootom arrow key - update y by 5px - 40
  }


  render() {
    return (
    <>
        <div className="ball" style={{'top': this.state.y, 'left': this.state.x}}></div>
        <button className="start" onClick={this.startTimer}>Start</button>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>
    </>
    );
  }
}

export default Timer;
