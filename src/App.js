import React, {Component} from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';
import data from './data'
import Display from './Components/Display/Display'
import Controls from './Components/Controls/Controls'

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: data,
      current: data[0],
      index: 0
    }
  }

  next = () => {
    if(this.state.index === this.state.data.length - 1) return
    this.setState({
        current: this.state.data[this.state.index + 1],
        index: this.state.index + 1
    })
  }

  prev = () => {
      if(this.state.index === 0) return
      this.setState({
          current: this.state.data[this.state.index - 1],
          index: this.state.index - 1
      })
  }

  render() {
      return (
        <div className="App">
          <header className="header">Home</header>
          <Display current={this.state.current} count={this.state.data.length} />
          <Controls prev={this.prev} next={this.next} />
        </div>
      );
    }
  }

export default App;
