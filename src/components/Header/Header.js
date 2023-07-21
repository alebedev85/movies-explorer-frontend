import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import logo from '../../images/logo_header.svg';

function Header({ loggedIn }) {

  const location = useLocation();

  return location.pathname === '/'
  || location.pathname === '/movies'
  || location.pathname === '/saved-movies'
  || location.pathname === '/profile' ?
    (
      <header className={`header ${!loggedIn ? 'header_color_blue' : ''}`}>
        <Link to='/' className='link'>
          <img src={logo} className='logo' alt='Логотип сайта' />
        </Link>
        <NavBar loggedIn={loggedIn} />
      </header>
    )
    :
    (<></>);
}

export default Header;
