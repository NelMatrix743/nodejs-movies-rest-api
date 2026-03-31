import * as db from "../db/memory.db.js";


// Expose only necessary methods from memory DB
export const getAllMovies = db.getAllMovies;
export const getMovieById = db.getMovieById;
export const createMovie = db.createMovie;
export const updateMovie = db.updateMovie;
export const deleteMovie = db.deleteMovie;


// EOSC