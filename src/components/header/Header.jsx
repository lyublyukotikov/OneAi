import React, { useState } from 'react';

const Header = ({ toggleModal }) => {
  return (
    <header className="header">
      <div className='header__inner container'>
        <a className="header__logo logo" href="/">
          OneAI
        </a>
        <button className='header__button button' onClick={toggleModal}>
          <span className="visually-hidden">Sign in</span>
          Sign in
        </button>

      </div>
    </header>
  );
};

export default Header;
