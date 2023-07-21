import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio" aria-label='Список другх моих проектов'>
      <h2 className="portfolio__title">
        Портфолио
      </h2>
      <ul className="portfolio__links">
        <li>
          <a className='portfolio__link link'
            href="https://github.com/alebedev85/how-to-learn"
            rel="noreferrer"
            target="_blank">
            <p className='portfolio__text'>Статичный сайт</p>
            <p className='portfolio__arrow' >↗</p>
          </a>
        </li>
        <li>
          <a className='portfolio__link link'
            href="https://github.com/alebedev85/russian-travel"
            rel="noreferrer"
            target="_blank">
            <p className='portfolio__text'>Адаптивный сайт</p>
            <p className='portfolio__arrow' >↗</p>
          </a>
        </li>
        <li>
          <a className='portfolio__link link'
            href="https://github.com/alebedev85/react-mesto-auth"
            rel="noreferrer"
            target="_blank">
            <p className='portfolio__text'>Одностраничное приложение</p>
            <p className='portfolio__arrow' >↗</p>
          </a>
        </li>
      </ul>

    </section>
  );
}

export default Portfolio;