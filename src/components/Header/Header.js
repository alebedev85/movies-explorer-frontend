import React from 'react';
import './Header.css';

import logo from '../../images/logo_header.svg';

function Header({ children }) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип сайта" />
      {children}
    </header>
  );
}

export default Header;
