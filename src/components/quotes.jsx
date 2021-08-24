/* eslint-disable react/prop-types */
import React from 'react';
import albert from '../images/alber.jpg';
import sofia from '../images/sofia.jpg';

const QuoteAuthor = (props) => {
  const { name, image, mainP } = props;
  return (
    <li className="d-flex my-5 justify-content-center align-items-center">
      <div className="image rounded-circle">
        <img
          className="w-100 h-100 rounded-circle"
          src={image}
          alt="Card cap"
        />
      </div>
      <div className="p-quotes">
        <ol>
          <li>{mainP}</li>
          <li>
            Without mathematics, there’s nothing you can do. Everything around
            you is mathematics. Everything around you is numbers.
          </li>
          <li>
            Mathematics is the most beautiful and most powerful creation of the
            human spirit.
          </li>
        </ol>
        <p>{name}</p>
      </div>
    </li>
  );
};

const Quote = () => (
  <section className="quotes w-100 p-5">
    <QuoteAuthor
      name="Albert Einstein, German theoretical physicist"
      mainP="Pure mathematics is, in its way, the poetry of logical ideas."
      image={albert}
    />
    <QuoteAuthor
      name="Sofia Kovalevskaya."
      mainP="A mathematician who is not also something of a poet will never be a complete mathematician."
      image={sofia}
    />
  </section>
);

export default Quote;
