import React from 'react';
import logo from '../../assets/Logo.svg';
import './styles.css';

export default function Header() {
  return (
    <div className="header-bar">
      <a href="./dashboard/"><img src={logo} id="logo-header" alt="Logo" /></a>
    </div>
  );
}
