import React from 'react';

const Calculator = () => (
  <div className="container">
    <div className="result">0</div>
    <ul className="cal-table">
      <li className="cal-item">AC</li>
      <li className="cal-item">+/-</li>
      <li className="cal-item">%</li>

      <li className="cal-item">7</li>
      <li className="cal-item">8</li>
      <li className="cal-item">9</li>
      <li className="cal-item"> X</li>

      <li className="cal-item">4</li>
      <li className="cal-item">5</li>
      <li className="cal-item">6</li>
      <li className="cal-item">-</li>

      <li className="cal-item">1</li>
      <li className="cal-item">2</li>
      <li className="cal-item">3</li>
      <li className="cal-item">+</li>

      <li className="cal-item">4</li>
      <li className="cal-item item-0">0</li>
      <li className="cal-item">.</li>
      <li className="cal-item">=</li>
    </ul>
  </div>
);

export default Calculator;
