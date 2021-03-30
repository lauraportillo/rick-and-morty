import React from 'react';
import '../stylesheets/Footer.scss';

const Footer = () => {
  return (
    <footer className="containerFooter">
      <a href="https://www.linkedin.com/in/laura-portillo-rodríguez" target="_blank" className="containerFooter__name">
        <small>By Laura Portillo Rodríguez</small>
      </a>
      <small>©2021</small>
    </footer>
  );
};

export default Footer;
