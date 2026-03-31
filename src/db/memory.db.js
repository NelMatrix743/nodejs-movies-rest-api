import { readData, writeData } from "../utils/fileHandler.js";


let movies = {}; // in-memory cache approach

// Initialize memory at startup
export const initDB = () => {
  movies = readData(); // expects an object
  console.log(`Loaded ${Object.keys(movies).length} movies into memory`);
};



// ESOC