import React, { useState } from 'react';
import './Header.css';
import logo from '../../src/assets/logo.png';
import { useEffect } from 'react';

export default function Header({ scrollToAbout, scrollToTokenomics, scrollToHowToBuy, scrollToArt }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isMenuOpen]);

  return (
    <div className={`header ${isMenuOpen ? 'header--open' : ''}`}>
      <div className="burger" onClick={toggleMenu}>
      <div className={`row ${isMenuOpen ? 'row--top' : ''}`}></div>
        <div className={`row ${isMenuOpen ? 'row--middle' : ''}`}></div>
        <div className={`row ${isMenuOpen ? 'row--bottom' : ''}`}></div>
      </div>
      
      <div className="logo_container">
        <img className='logo_img' src={logo} alt="" />
        <h1>GigaTrump</h1>  
      </div>

      <ul className='header_list'>
        <li onClick={scrollToAbout}>About</li>
        <li onClick={scrollToTokenomics}>Tokenomics</li>
        <li onClick={scrollToHowToBuy}>How to Buy</li>
        <li onClick={scrollToArt}>Links</li>
      </ul>

      {isMenuOpen && (
        <div className="menu_overlay">
          <div className="menu_content">
            {/* <img className='menu_logo_img' src={logo} alt="" /> */}
            <h1>GigaTrump</h1>
            <ul className='menu_list'>
              <li onClick={() => { scrollToAbout(); toggleMenu(); }}>About</li>
              <li onClick={() => { scrollToTokenomics(); toggleMenu(); }}>Tokenomics</li>
              <li onClick={() => { scrollToHowToBuy(); toggleMenu(); }}>How to Buy</li>
              <li onClick={() => { scrollToArt(); toggleMenu(); }}>Links</li>
            </ul>
            <button className='buy_button'>Buy Token</button>
          </div>
        </div>
      )}
    </div>
  );
}
