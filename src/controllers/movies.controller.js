import * as service from "../services/movies.service.js";


// convert object → array
const formatMovies = (moviesObj) => {
  return Object.entries(moviesObj).map(([id, data]) => ({
    id,
    ...data,
  }));
};



// EOSC