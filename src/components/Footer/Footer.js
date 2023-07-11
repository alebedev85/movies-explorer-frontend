import React from 'react';
import './Footer.css';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__navigation'>
        <p className='footer__links__text'>
          &copy; {currentYear}
        </p>
        <ul className='footer__links'>
          <li>
            <a href='https://practicum.yandex.ru'
              className='footer__links__text link'
              rel='noreferrer'
              target='_blank'>
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a href='https://github.com/alebedev85/movies-explorer-frontend'
              className='footer__links__text link'
              rel='noreferrer'
              target='_blank'>
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;