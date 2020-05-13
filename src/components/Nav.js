import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/grip1.png';
import './styles.css';

function Nav() {
  return (
    <nav>
        <Link to='/'><img className='logo' src={logo} alt='Logo'/></Link>
        <ul className='menu'>
        <Link to='/about'>
                <li>Map</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;