import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/grip1.png';
import './styles.css';

function Nav() {
  return (
    <div>
        <Link to='/'>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
            </div>
        </Link>
        <ul className='menu'>
            <Link to='/map'>
                <li>Map</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
        </ul>                 
    </div>
  );
}

export default Nav;