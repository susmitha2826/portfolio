import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
       &copy; 2025 <span>@Susmitha Gopireddy</span>. Built with 💖 and React.
      </div>
      <div className="footer-right">
        <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
   <a href="https://github.com/susmitha2826" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/susmitha-gopireddy-471091237" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
}

export default Footer;
