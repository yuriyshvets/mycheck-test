import React from 'react';
import logo from '../../assets/images/logo.png';
import './styles.scss';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={logo} alt="MyCheck" />
      </div>
    </header>
  );
}

export default Header;
