import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(state, e.target.value);
    setState(result);
  };

  const resultDisplayer = (e) => {
    setState({
      total: e.target.value,
    });
  };

  const { total, next, operation } = state;
  return (
    <div className="container">
      <div className="result" onChange={resultDisplayer}>
        {total}
        {operation}
        {next}
      </div>
      <div className="row">
        <button type="button" value="AC" onClick={handleClick}>AC</button>
        <button type="button" value="+/-" onClick={handleClick}>+/-</button>
        <button type="button" value="%" onClick={handleClick}>%</button>
        <button type="button" className="op" value="÷" onClick={handleClick}>/</button>
      </div>
      <div className="row">
        <button type="button" value="7" onClick={handleClick}>7</button>
        <button type="button" value="8" onClick={handleClick}>8</button>
        <button type="button" value="9" onClick={handleClick}>9</button>
        <button type="button" className="op" value="x" onClick={handleClick}>x</button>
      </div>
      <div className="row">
        <button type="button" value="4" onClick={handleClick}>4</button>
        <button type="button" value="5" onClick={handleClick}>5</button>
        <button type="button" value="6" onClick={handleClick}>6</button>
        <button type="button" className="op" value="-" onClick={handleClick}>-</button>
      </div>
      <div className="row">
        <button type="button" value="1" onClick={handleClick}>1</button>
        <button type="button" value="2" onClick={handleClick}>2</button>
        <button type="button" value="3" onClick={handleClick}>3</button>
        <button type="button" className="op" value="+" onClick={handleClick}>+</button>
      </div>
      <div className="row last">
        <button type="button" value="0" onClick={handleClick}>0</button>
        <button type="button" value="." onClick={handleClick}>.</button>
        <button type="button" className="op" value="=" onClick={handleClick}>=</button>
      </div>
    </div>

  );
};

export default Calculator;
