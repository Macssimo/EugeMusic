import axios from 'axios';

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

const getAccessToken = async () => {
    const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({
            grant_type: 'client_credentials',
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`,
            },
        }
    );
    return response.data.access_token;
};

const searchTracks = async (query) => {
    const accessToken = await getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
        params: {
            q: query,
            type: 'track',
            limit: 10,
        },
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data.tracks.items;
};

export { searchTracks };