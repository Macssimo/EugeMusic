// En tu componente FeaturedPlaylists.jsx
import { useState, useEffect } from 'react';
import { getFeaturedPlaylists } from '../services/spotify';

const FeaturedPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('spotify_token');
    
    const fetchData = async () => {
      try {
        const data = await getFeaturedPlaylists(token);
        setPlaylists(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(loading) return <Spinner />;

  return (
    <div className="playlists-container">
      {playlists.map(playlist => (
        <PlaylistCard key={playlist.id} data={playlist} />
      ))}
    </div>
  );
};