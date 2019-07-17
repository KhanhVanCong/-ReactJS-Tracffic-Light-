import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class App extends Component {
  constructor() {
    super();
    this.state = {
        currentColor: GREEN,
        idInterVal: 0
    };

    this.startInterval = this.startInterval.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
    this.getNextColor = this.getNextColor.bind(this);
    this.manualChangeColor = this.manualChangeColor.bind(this);
  }


  startInterval()
  {
    this.state.idInterVal = setInterval(() => {           
      this.setState({
          currentColor: this.getNextColor(this.state.currentColor)
      });
  }, 1000);
  }


  stopInterval() {
    clearInterval(this.state.idInterVal);
    this.setState({
      idInterVal: 0
    })
  }

  manualChangeColor() {
    this.setState({
      currentColor: this.getNextColor(this.state.currentColor)
    })
  }

  getNextColor(color) {
    switch(color){
        case RED:
            return ORANGE;
        case ORANGE:
            return GREEN;
        default:
            return RED;
    }
}

  render()
  {
    return(
      <div className="App">
        <TrafficLight currentColor={this.state.currentColor}/>
        <button onClick={this.startInterval}>Start Auto</button>
        <button onClick={this.stopInterval}>Stop Auto</button>
        <button onClick={this.manualChangeColor}>Manual Change</button>
      </div>
    );
  }
}

export default App;
