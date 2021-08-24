import React from 'react';
import albert from '../images/alber.jpg';
import sofia from '../images/sofia.jpg';

const Quote = () => (
  <section className="quotes w-100 p-5">
    <ul className="mx-auto">
      <li className="d-flex my-5 justify-content-center align-items-center">
        <div className="image rounded-circle">
          <img
            className="w-100 h-100 rounded-circle"
            src={albert}
            alt="Card cap"
          />
        </div>
        <div className="p-quotes">
          <ol>
            <li>
              Pure mathematics is, in its way, the poetry of logical ideas.
            </li>
            <li>
              Without mathematics, there’s nothing you can do. Everything around
              you is mathematics. Everything around you is numbers.
            </li>
            <li>
              Mathematics is the most beautiful and most powerful creation of
              the human spirit.
            </li>
          </ol>
        </div>
      </li>
      <li className="d-flex justify-content-center align-items-center">
        <div className="image rounded-circle">
          <img
            className="w-100 h-100 rounded-circle"
            src={sofia}
            alt="Card cap"
          />
        </div>
        <div className="p-quotes">
          <ol>
            <li>
              Pure mathematics is, in its way, the poetry of logical ideas.
            </li>
            <li>
              Without mathematics, there’s nothing you can do. Everything around
              you is mathematics. Everything around you is numbers.
            </li>
            <li>
              Mathematics is the most beautiful and most powerful creation of
              the human spirit.
            </li>
          </ol>
        </div>
      </li>
    </ul>
  </section>
);

export default Quote;
