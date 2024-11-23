import React from 'react';
import '../Style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>
          Copyright © 2024 KLIKFLIX by{' '}
          <a href="https://instagram.com/sultvnnnn" target="_blank" rel="noopener noreferrer">
            @sultvnnnn
          </a>
          <br /> Built with Love, React, and Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
