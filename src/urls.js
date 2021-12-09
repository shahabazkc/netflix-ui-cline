import { API_KEY } from './constants/constant'

export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const ComedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const horrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`

export const romanceMovies = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const trendingMovies = `trending/all/week?api_key=${API_KEY}&language=en-US`