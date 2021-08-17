import React, { Component } from 'react';
import {
  TiDivide, TiTimes, TiMinus, TiPlus, TiEquals,
} from 'react-icons/ti';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <ul className="cal-table">
          <li className="cal-item">AC</li>
          <li className="cal-item">+/-</li>
          <li className="cal-item">%</li>
          <li className="cal-item bg-orange">
            <TiDivide />
          </li>

          <li className="cal-item">7</li>
          <li className="cal-item">8</li>
          <li className="cal-item">9</li>
          <li className="cal-item bg-orange">
            <TiTimes />
          </li>

          <li className="cal-item">4</li>
          <li className="cal-item">5</li>
          <li className="cal-item">6</li>
          <li className="cal-item bg-orange">
            <TiMinus />
          </li>

          <li className="cal-item">1</li>
          <li className="cal-item">2</li>
          <li className="cal-item">3</li>
          <li className="cal-item bg-orange">
            <TiPlus />
          </li>

          <li className="cal-item item-0">0</li>
          <li className="cal-item">.</li>
          <li className="cal-item bg-orange">
            <TiEquals />
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
