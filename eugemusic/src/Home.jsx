import React, { useEffect, useState } from 'react';
import { searchTracks } from '../services/spotify';
import PlaylistSection from '../components/PlaylistSection';

const Home = ({ token }) => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const results = await searchTracks(token, 'genre:pop');
      setFeatured(results.slice(0, 6));
    };
    
    if (token) loadData();
  }, [token]);

  return (
    <div className="page-container">
      <PlaylistSection title="Pop Hits" songs={featured} />
    </div>
  );
};