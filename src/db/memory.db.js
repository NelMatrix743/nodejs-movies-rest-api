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



// ESOC