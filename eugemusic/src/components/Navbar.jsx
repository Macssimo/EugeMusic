import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ onSearch }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FiSun /> : <FiMoon />}
      </div>
      <input 
        type="text" 
        placeholder="Buscar canciones..." 
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
};