import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer__inner container'>
        <div className='footer__contacts'>
          Get help at <a href="mailto:support@avgen.me" className="footer__contacts-link">support@avgen.me</a>
        </div>
        <div className='footer__copyright'>
          Copyright © 2024 Mook Ltd.<br/>All rights reserved.
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;