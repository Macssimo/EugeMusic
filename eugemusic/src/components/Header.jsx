import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="app-header">
    <Link to="/">
      <img src="/logo.png" alt="Spotify Clone" />
    </Link>
    <nav>
      <Link to="/library">Tu Biblioteca</Link>
    </nav>
  </header>
);