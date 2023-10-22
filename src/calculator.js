import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      result: '',
    };
  }

  handleInput = (value) => {
    this.setState((prevState) => ({
      display: prevState.display + value,
    }));
  };

  clear = () => {
    this.setState({
      display: '',
      result: '',
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.display),
      });
    } catch (error) {
      this.setState({
        result: 'Error',
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="screen">
          <div className="display">{this.state.display}</div>
          <div className="result">{this.state.result}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleInput('7')}>7</button>
            <button onClick={() => this.handleInput('8')}>8</button>
            <button onClick={() => this.handleInput('9')}>9</button>
            <button onClick={() => this.handleInput('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput('4')}>4</button>
            <button onClick={() => this.handleInput('5')}>5</button>
            <button onClick={() => this.handleInput('6')}>6</button>
            <button onClick={() => this.handleInput('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleInput('1')}>1</button>
            <button onClick={() => this.handleInput('2')}>2</button>
            <button onClick={() => this.handleInput('3')}>3</button>
            <button onClick={() => this.handleInput('*')}>x</button>
          </div>
          <div className="row">
            <button onClick={this.clear}>C</button>
            <button onClick={() => this.handleInput('0')}>0</button>
            <button onClick={this.calculate}>=</button>
            <button onClick={() => this.handleInput('/')}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
