import React from 'react';

class Numbers extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <div className="row">
          <button type="button" value="AC">AC</button>
          <button type="button" value="plusOuMoin">+/-</button>
          <button type="button" value="rest">%</button>
          <button type="button" className="op" value="division">/</button>
        </div>
        <div className="row">
          <button type="button" value="7">7</button>
          <button type="button" value="8">8</button>
          <button type="button" value="9">9</button>
          <button type="button" className="op" value="multiplication">*</button>
        </div>
        <div className="row">
          <button type="button" value="4">4</button>
          <button type="button" value="5">5</button>
          <button type="button" value="6">6</button>
          <button type="button" className="op" value="minus">-</button>
        </div>
        <div className="row">
          <button type="button" value="1">1</button>
          <button type="button" value="2">2</button>
          <button type="button" value="3">3</button>
          <button type="button" className="op" value="addition">+</button>
        </div>
        <div className="row last">
          <button type="button" value="0">0</button>
          <button type="button" value="dot">.</button>
          <button type="button" className="op" value="equal">=</button>
        </div>
      </div>

    );
  }
}

export default Numbers;
