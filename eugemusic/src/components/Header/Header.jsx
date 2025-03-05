import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify } from 'react-icons/fa';

const Header = () => (
    <header>
        <Link to="/">
            <FaSpotify size={32} />
            <span>My Spotify App</span>
        </Link>
    </header>
);

export default Header;