import { readData, writeData } from "../utils/fileHandler.js";


let movies = {}; // in-memory cache approach

// Initialize memory at startup
export const initDB = () => {
  movies = readData(); // expects an object
  console.log(`Loaded ${Object.keys(movies).length} movies into memory`);
};


// Generate next ID safely
const generateId = () => {
  const ids = Object.keys(movies).map(Number);
  if (ids.length === 0) return "0";

  const maxId = Math.max(...ids);
  return String(maxId + 1);
};

// Get all movies
export const getAllMovies = () => movies;


// Get movie by ID
export const getMovieById = (id) => {
  return movies[id] || null;
};


// Create a new movie
export const createMovie = (movieData) => {
  const newId = generateId();

  movies[newId] = {
    title: movieData.title,
    release_year: movieData.release_year,
    age_certification: movieData.age_certification,
    runtime: movieData.runtime,
    genres: movieData.genres,
    production_countries: movieData.production_countries,
    seasons: movieData.seasons,
    imdb_score: movieData.imdb_score,
    imdb_votes: movieData.imdb_votes,
  };

  writeData(movies);
  return { id: newId, ...movies[newId] };
};



// ESOC