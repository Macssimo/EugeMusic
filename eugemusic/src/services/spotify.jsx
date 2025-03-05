import SpotifyWebApi from 'spotify-web-api-node';

const clientId = 'TU_CLIENT_ID';
const redirectUri = 'http://localhost:3000/callback'; // Cambiar en producción
const scopes = ['user-read-private', 'user-read-email', 'user-library-read'];

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  redirectUri: redirectUri
});

export const loginUrl = spotifyApi.createAuthorizeURL(scopes);

export const getToken = async (code) => {
  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    return data.body.access_token;
  } catch (err) {
    console.error('Error al obtener token:', err);
    return null;
  }
};

export const searchTracks = async (token, query) => {
  spotifyApi.setAccessToken(token);
  const response = await spotifyApi.searchTracks(query);
  return response.body.tracks.items.map(item => ({
    id: item.id,
    title: item.name,
    artist: item.artists[0].name,
    duration: msToMinutes(item.duration_ms),
    albumImage: item.album.images[0].url,
    previewUrl: item.preview_url
  }));
};

const msToMinutes = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, '0')}`;
};