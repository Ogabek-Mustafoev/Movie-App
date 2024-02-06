import {API_KEY, BASE_URL} from "../constants";
import {apiRequest} from "./axios";

const trendingMovies = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const upcomingMovies = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const topRatedMovie = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
const popularMovies = `${BASE_URL}/tv/popular?api_key=${API_KEY}`;

const movieDetail = (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
const movieCredits = (id) => `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
const similarMovies = (id) => `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;

export const fetchTrendingMovies = () => apiRequest(trendingMovies);
export const fetchUpcomingMovies = () => apiRequest(upcomingMovies);
export const fetchTopRatedMovies = () => apiRequest(topRatedMovie);
export const fetchPopularMovies = () => apiRequest(popularMovies);
export const fetchMovieDetails = (id) => apiRequest(movieDetail(id));
export const fetchMovieCredits = (id) => apiRequest(movieCredits(id));
export const fetchSimilarMovies = (id) => apiRequest(similarMovies(id));

export const fetchImage = (posterPath, width = 185) =>
  posterPath ? `https://image.tmdb.org/t/p/w${width}${posterPath}` : null
