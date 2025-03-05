import React from 'react';
import PlaylistSection from '../components/PlaylistSection';

const Home = () => {
  return (
    <main>
      <h2>Recomendados para ti</h2>
      <PlaylistSection category="recomendados" />
      
      <h2>Tus favoritos</h2>
      <PlaylistSection category="favoritos" />
    </main>
  );
};