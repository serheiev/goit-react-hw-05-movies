import axios from 'axios';
const KEY = 'c220bc7b4cb21e29de30191d135b55c8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendMovies = async () => {
  const response = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });
  return await response.data.results;
};
export const fetchMoviesByQuery = async query => {
  const response = await axios.get('search/movie', {
    params: {
      api_key: KEY,
      query,
    },
  });

  return response.data.results;
};

export const fetchMovieById = async movieId => {
  const response = await axios(`movie/${movieId}`, {
    params: { api_key: KEY },
  });

  return response.data;
};

export const fetchMovieCast = async (movieId, endpoint) => {
  const response = await axios(`movie/${movieId}${endpoint}`, {
    params: { api_key: KEY },
  });

  return response.data;
};

export const fetchMovieReview = async (movieId, endpoint) => {
  const response = await axios(`movie/${movieId}${endpoint}`, {
    params: { api_key: KEY },
  });

  return response.data;
};
// apiKey = c220bc7b4cb21e29de30191d135b55c8
