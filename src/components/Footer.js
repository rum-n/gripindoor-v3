import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        
        <ul className='footerMenu'>
            <Link to='/map'>
                <li>Map</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
        </ul>
    </div>
  );
}

export default Footer;
