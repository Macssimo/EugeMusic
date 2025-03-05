import React, { useState, useEffect } from 'react';
import { searchTracks } from '../services/spotifyAPI';
import TrackList from '../../components/TrackList/TrackList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Search = () => {
    const [tracks, setTracks] = useState([]);

    const handleSearch = async (query) => {
        const results = await searchTracks(query);
        setTracks(results);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <TrackList tracks={tracks} />
        </div>
    );
};

export default Search;