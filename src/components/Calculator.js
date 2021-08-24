import React, { useState } from 'react';
import calculate from '../mathLogic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCalculate = ({ currentTarget: btn }) => {
    const btnName = btn.outerText;
    try {
      const obj = calculate(state, btnName);
      setState({ ...state, ...obj });
    } catch (error) {
      const { next } = state;
      if (next) {
        setState({ ...state, total: next, next: null });
      }
      setState({ ...state, operation: btnName });
    }
  };

  const calculatorData = [
    [
      { class: 'cal-item makefalse', name: 'AC' },
      { class: 'cal-item', name: '+/-' },
      { class: 'cal-item', name: '%' },
      { class: 'cal-item bg-orange', name: '÷' },
    ],
    [
      { class: 'cal-item', name: '7' },
      { class: 'cal-item', name: '8' },
      { class: 'cal-item', name: '9' },
      { class: 'cal-item bg-orange', name: 'x' },
    ],
    [
      { class: 'cal-item', name: '4' },
      { class: 'cal-item', name: '5' },
      { class: 'cal-item', name: '6' },
      { class: 'cal-item bg-orange', name: '-' },
    ],
    [
      { class: 'cal-item', name: '1' },
      { class: 'cal-item', name: '2' },
      { class: 'cal-item', name: '3' },
      { class: 'cal-item bg-orange', name: '+' },
    ],
    [
      { class: 'cal-item item-0', name: '0' },
      { class: 'cal-item', name: '.' },
      { class: 'cal-item bg-orange', name: '=' },
    ],
  ];

  const { next, total } = state;
  return (
    <div className="container-cal w-50">
      <div className="result">
        {total && next ? next : total || next || '0'}
      </div>
      <ul className="cal-table">
        {calculatorData.map((row) => row.map((data) => (
          <li
            className={data.class}
            aria-hidden="true"
            onClick={(e) => handleCalculate(e)}
            key={data.name}
          >
            {data.name}
          </li>
        )))}
      </ul>
    </div>
  );
};

export default Calculator;
