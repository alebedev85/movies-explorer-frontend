import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">
        Портфолио
      </h2>
      <a className='portfolio__link'
        href="/#"
        rel="noreferrer"
        target="_blank">
        <p className='portfolio__link__text'>Статичный сайт</p>
        <p className='portfolio__link__pic' >↗</p>
      </a>
      <a className='portfolio__link'
        href="/#"
        rel="noreferrer"
        target="_blank">
        <p className='portfolio__link__text'>Адаптивный сайт</p>
        <p className='portfolio__link__pic' >↗</p>
      </a>
      <a className='portfolio__link'
        href="/#"
        rel="noreferrer"
        target="_blank">
        <p className='portfolio__link__text'>Одностраничное приложение</p>
        <p className='portfolio__link__pic' >↗</p>
      </a>
    </section>
  );
}

export default Portfolio;