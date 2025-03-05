import React from 'react';
import SongCard from './SongCard';
import './PlaylistSection.css';

const PlaylistSection = ({ title, songs }) => {
  return (
    <section className="playlist-section">
      <h2 className="section-title">{title}</h2>
      <div className="songs-grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
};

export default PlaylistSection;