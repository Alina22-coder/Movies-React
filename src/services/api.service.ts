import { IGenre } from "../models/IGenre";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN as string;

const authHeaders = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
};

export const getMovies = async (page = 1) => {
  const response = await fetch(`${TMDB_BASE_URL}/discover/movie?page=${page}`, {
    headers: authHeaders,
  });
  const data = await response.json();
  return data;
};

export const getMoviesByGenre = async (genreId: number | string, page = 1) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?with_genres=${genreId}&page=${page}`,
    { headers: authHeaders },
  );
  return await response.json();
};

export const getMovieById = async (movieId: number | string) => {
  const response = await fetch(`${TMDB_BASE_URL}/movie/${movieId}`, {
    headers: authHeaders,
  });
  return await response.json();
};

export const getGenres = async (): Promise<IGenre[]> => {
  const response = await fetch(`${TMDB_BASE_URL}/genre/movie/list`, {
    headers: authHeaders,
  });
  const data = await response.json();
  return data.genres;
};

export const getGenreById = async (genreId: number) => {
  const response = await fetch(`${TMDB_BASE_URL}/genre/movie/list`, {
    headers: authHeaders,
  });
  const data = await response.json();
  const genre = data.genres.find((item: IGenre) => item.id === genreId);
  return genre;
};

export const getMoviesByCategory = async (endpoint: string) => {
  const response = await fetch(`${TMDB_BASE_URL}/movie/${endpoint}`, {
    headers: authHeaders,
  });
  return await response.json();
};

export const searchMovies = async (query: string, page = 1) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    { headers: authHeaders },
  );
  return await response.json();
};

export const getAccount = async () => {
  const response = await fetch(`${TMDB_BASE_URL}/account`, {
    headers: authHeaders,
  });
  return await response.json();
};
