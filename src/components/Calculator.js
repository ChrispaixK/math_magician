import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick =(e) => {
    const result = calculate(this.state, e.target.value);
    this.setState(result);
  }

  resultDisplayer = (e) => {
    this.setState({
      total: e.target.value,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result" onChange={this.resultDisplayer}>
          {total}
          {operation}
          {next}
        </div>
        <div className="row">
          <button type="button" value="AC" onClick={this.handleClick}>AC</button>
          <button type="button" value="+/-" onClick={this.handleClick}>+/-</button>
          <button type="button" value="%" onClick={this.handleClick}>%</button>
          <button type="button" className="op" value="÷" onClick={this.handleClick}>/</button>
        </div>
        <div className="row">
          <button type="button" value="7" onClick={this.handleClick}>7</button>
          <button type="button" value="8" onClick={this.handleClick}>8</button>
          <button type="button" value="9" onClick={this.handleClick}>9</button>
          <button type="button" className="op" value="x" onClick={this.handleClick}>x</button>
        </div>
        <div className="row">
          <button type="button" value="4" onClick={this.handleClick}>4</button>
          <button type="button" value="5" onClick={this.handleClick}>5</button>
          <button type="button" value="6" onClick={this.handleClick}>6</button>
          <button type="button" className="op" value="-" onClick={this.handleClick}>-</button>
        </div>
        <div className="row">
          <button type="button" value="1" onClick={this.handleClick}>1</button>
          <button type="button" value="2" onClick={this.handleClick}>2</button>
          <button type="button" value="3" onClick={this.handleClick}>3</button>
          <button type="button" className="op" value="+" onClick={this.handleClick}>+</button>
        </div>
        <div className="row last">
          <button type="button" value="0" onClick={this.handleClick}>0</button>
          <button type="button" value="." onClick={this.handleClick}>.</button>
          <button type="button" className="op" value="=" onClick={this.handleClick}>=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
