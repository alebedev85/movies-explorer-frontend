import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import logo from '../../images/logo_header.svg';

function Header({ loggedIn }) {

  const location = useLocation();

  return location.pathname !== "/register" & location.pathname !== "/login"?
    (
      <header className={`header ${!loggedIn && 'header__color'}`}>
        <img src={logo} className='header__logo' alt='Логотип сайта' />
        <NavBar loggedIn={loggedIn} />
      </header>
    )
    :
    (<></>);
}

export default Header;
