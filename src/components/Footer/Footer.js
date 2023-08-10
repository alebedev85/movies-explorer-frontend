import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

import { githubPage } from '../../utils/constants.js';

function Footer() {

  const location = useLocation();
  const currentYear = new Date().getFullYear();

  return location.pathname === githubPage + '/'
    || location.pathname === githubPage + '/movies'
    || location.pathname === githubPage + '/saved-movies' ?
    (
      <footer className='footer'>
        <p className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='navigation'>
          <p className='navigation__text navigation__text_gray'>
            &copy; {currentYear}
          </p>
          <ul className='navigation__list'>
            <li>
              <a href='https://practicum.yandex.ru'
                className='navigation__text link'
                rel='noreferrer'
                target='_blank'>
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a href='https://github.com/alebedev85/movies-explorer-frontend'
                className='navigation__text link'
                rel='noreferrer'
                target='_blank'>
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    ) :
    (<></>);
}

export default Footer;