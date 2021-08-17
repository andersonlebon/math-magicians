import React, { Component } from 'react';
import { TiDivide, TiTimes, TiMinus, TiPlus, TiEquals } from 'react-icons/ti';
import calculate from '../mathLogic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleCalculate = ({ currentTarget: btn }) => {
    const btnName = btn.outerText === '' ? btn.id : btn.outerText;
    const obj = calculate(this.state, btnName);
    this.setState(obj);
    console.log(btnName);
  };

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <div className="result">
          {total && next ? next : total || next || '0'}
        </div>
        <ul className="cal-table">
          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            AC
          </li>
          <li
            className="cal-item onClick={this.handleCalculate}"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            +/-
          </li>
          <li
            className="cal-item"
            id="%"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            %
          </li>
          <li
            className="cal-item bg-orange"
            id="÷"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            <TiDivide />
          </li>

          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            7
          </li>
          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            8
          </li>
          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            9
          </li>
          <li
            className="cal-item bg-orange"
            id="x"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            <TiTimes />
          </li>

          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            4
          </li>
          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            5
          </li>
          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            6
          </li>

          <li
            className="cal-item bg-orange"
            id="-"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            <TiMinus />
          </li>

          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            1
          </li>
          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            2
          </li>
          <li
            className="cal-item"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            3
          </li>

          <li
            className="cal-item bg-orange "
            id="+"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            <TiPlus />
          </li>

          <li
            className="cal-item item-0"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            0
          </li>
          <li
            className="cal-item"
            id="-"
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            .
          </li>
          <li
            className="cal-item bg-orange"
            id="="
            onClick={this.handleCalculate}
            aria-hidden="true"
          >
            <TiEquals />
          </li>
        </ul>
      </div>
    );
  }
}

export default Calculator;
