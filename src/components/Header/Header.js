import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import logo from '../../images/logo_header.svg';

import { githubPage } from '../../utils/constants.js';

function Header({ loggedIn }) {

  const location = useLocation();

  return location.pathname === githubPage + '/'
    || location.pathname === githubPage + '/movies'
    || location.pathname === githubPage + '/saved-movies'
    || location.pathname === githubPage + '/profile' ?
    (
      <header className={`header ${!loggedIn ? 'header_color_blue' : ''}`}>
        <Link to={githubPage + '/'} className='link'>
          <img src={logo} className='logo' alt='Логотип сайта' />
        </Link>
        <NavBar loggedIn={loggedIn} />
      </header>
    )
    :
    (<></>);
}

export default Header;
