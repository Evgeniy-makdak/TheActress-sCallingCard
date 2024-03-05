import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="burger-menu-line"></div>
      <div className="burger-menu-line"></div>
      <div className="burger-menu-line"></div>
    </div>
  );
};

export default BurgerMenu;