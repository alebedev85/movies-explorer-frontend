import React from 'react';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import logo from '../../images/logo_header.svg';

function Header({loggedIn}) {
  return (
    <header className={`header ${!loggedIn && 'header__color'}`}>
      <img src={logo} className='header__logo' alt='Логотип сайта' />
      <NavBar />
    </header>
  );
}

export default Header;
