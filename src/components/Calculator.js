import React, { useState } from 'react';
import {
  TiDivide, TiTimes, TiMinus, TiPlus, TiEquals,
}
  from 'react-icons/ti';
import calculate from '../mathLogic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculate = ({ currentTarget: btn }) => {
    console.log('hello');
    try {
      const btnName = btn.outerText === '' ? btn.id : btn.outerText;
      const obj = calculate(state, btnName);
      const { next, operation, total } = obj;
      let checkTotal;
      let checkOp;
      const { total: stateTotal, operation: stateOp } = state;
      if (!total && stateTotal) {
        checkTotal = stateTotal;
      } else checkTotal = total;
      if (!operation && stateOp) {
        checkOp = stateOp;
      } else checkOp = operation;
      setState({ next, operation: checkOp, total: checkTotal });
    } catch (error) {
      const btnName = btn.outerText === '' ? btn.id : btn.outerText;
      const { next } = state;
      if (next) {
        setState({ total: next, next: null });
      }
      setState({ operation: btnName });
    }
  };

  const { next, total } = state;
  return (
    <div className="container">
      <div className="result">
        {total && next ? next : total || next || '0'}
      </div>
      <ul className="cal-table">
        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
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

        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
          7
        </li>
        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
          8
        </li>
        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
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

        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
          4
        </li>
        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
          5
        </li>
        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
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

        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
          1
        </li>
        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
          2
        </li>
        <li className="cal-item" onClick={(e) => handleCalculate(e)} aria-hidden="true">
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
