/* eslint-disable */

import React, { useState } from 'react';
import { TiDivide, TiTimes, TiMinus, TiPlus, TiEquals } from 'react-icons/ti';
import calculate from '../mathLogic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculate = ({ currentTarget: btn }) => {

    try {
        const btnName = btn.outerText === '' ? btn.id : btn.outerText;
        const obj = calculate(state, btnName);
        setState({ ...state, ...obj });
    } catch (error) {
      const btnName = btn.outerText === '' ? btn.id : btn.outerText;
      const { next } = state;
      if (next) {
        setState({ ...state, total: next, next: null });
      }
      setState({...state, operation: btnName });
    }
  };

  const { next, total } = state;
  return (
    <div className="container">
      <div className="result">
        {total && next ? next : total || next || '0'}
      </div>
      <ul className="cal-table">
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          AC
        </li>
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          +/-
        </li>
        <li
          className="cal-item"
          id="%"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          %
        </li>
        <li
          className="cal-item bg-orange"
          id="÷"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          <TiDivide />
        </li>

        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          7
        </li>
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          8
        </li>
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          9
        </li>
        <li
          className="cal-item bg-orange"
          id="x"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          <TiTimes />
        </li>

        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          4
        </li>
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          5
        </li>
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          6
        </li>

        <li
          className="cal-item bg-orange"
          id="-"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          <TiMinus />
        </li>

        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          1
        </li>
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          2
        </li>
        <li
          className="cal-item"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          3
        </li>

        <li
          className="cal-item bg-orange "
          id="+"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          <TiPlus />
        </li>

        <li
          className="cal-item item-0"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          0
        </li>
        <li
          className="cal-item"
          id="-"
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          .
        </li>
        <li
          className="cal-item bg-orange"
          id="="
          onClick={(e) => handleCalculate(e)}
          aria-hidden="true"
        >
          <TiEquals />
        </li>
      </ul>
    </div>
  );
};

export default Calculator;
