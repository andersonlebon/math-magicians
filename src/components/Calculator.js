/* eslint-disable */

import React, { Component } from 'react';
import { TiDivide, TiTimes, TiMinus, TiPlus, TiEquals } from 'react-icons/ti';
import calculate from './calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleCalculate = (e) => {
    const { obj } = this.state;
    this.setState({ obj: calculate(obj, e.target.outerText) });
    console.log(this.state.obj)
  };

  render() {
    const { obj: object } = this.state;
    return (
      <div className="container">
        <div className="result">{object.total|| object.next}</div>
        <ul className="cal-table">
          <li className="cal-item" name="caleb" onClick={this.handleCalculate}>
            AC
          </li>
          <li
            className="cal-item onClick={this.handleCalculate}"
            onClick={this.handleCalculate}
          >
            +/-
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            %
          </li>
          <li className="cal-item bg-orange" onClick={this.handleCalculate}>
            <TiDivide />
          </li>

          <li className="cal-item" onClick={this.handleCalculate}>
            7
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            8
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            9
          </li>
          <li className="cal-item bg-orange" onClick={this.handleCalculate}>
            <TiTimes />
          </li>

          <li className="cal-item" onClick={this.handleCalculate}>
            4
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            5
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            6
          </li>
          <li className="cal-item bg-orange" onClick={this.handleCalculate}>
            -
          </li>

          <li className="cal-item" onClick={this.handleCalculate}>
            1
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            2
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            3
          </li>
          <li className="cal-item bg-orange " onClick={this.handleCalculate}>
            <TiPlus />
          </li>

          <li className="cal-item item-0" onClick={this.handleCalculate}>
            0
          </li>
          <li className="cal-item" onClick={this.handleCalculate}>
            .
          </li>
          <li className="cal-item bg-orange" onClick={this.handleCalculate}>
            =
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
