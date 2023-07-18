import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

import NavBar from '../NavBar/NavBar';
import logo from '../../images/logo_header.svg';

function Header({ loggedIn }) {

  const location = useLocation();

  return location.pathname !== "/register"
    & location.pathname !== "/login"
    & location.pathname !== "/notfound" ?
    (
      <header className={`header ${!loggedIn && 'header__color'}`}>
        <Link to="/" className="link">
          <img src={logo} className='header__logo' alt='Логотип сайта' />
        </Link>
        <NavBar loggedIn={loggedIn} />
      </header>
    )
    :
    (<></>);
}

export default Header;
