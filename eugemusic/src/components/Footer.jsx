import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="current-track">
          <img 
            src="/assets/images/current-song.jpg" 
            alt="Current track" 
            className="track-art"
          />
          <div className="track-info">
            <h4>Canción Actual</h4>
            <p>Artista</p>
          </div>
        </div>
      </div>

      <div className="footer-center">
        <div className="player-controls">
          <button>⏮</button>
          <button>⏯</button>
          <button>⏭</button>
        </div>
      </div>

      <div className="footer-right">
        <div className="volume-control">
          <input type="range" min="0" max="100" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;