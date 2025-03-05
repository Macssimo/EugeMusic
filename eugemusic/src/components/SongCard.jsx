import React from 'react';
import './SongCard.css';

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <div className="album-art">
        <img src={song.albumImage} alt={song.title} />
        <button className="play-button">▶</button>
      </div>
      
      <div className="song-info">
        <h3 className="song-title">{song.title}</h3>
        <p className="artist">{song.artist}</p>
        <div className="song-meta">
          <span className="duration">{song.duration}</span>
          <button className="like-button">❤</button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;