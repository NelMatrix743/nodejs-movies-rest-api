import * as service from "../services/movies.service.js";


// convert object → array
const formatMovies = (moviesObj) => {
  return Object.entries(moviesObj).map(([id, data]) => ({
    id,
    ...data,
  }));
};


// GET /api/movies
export const getMovies = (req, res) => {
  let moviesObj = service.getAllMovies();
  let movies = formatMovies(moviesObj);

  const { search, genre, page = 1, limit = 10 } = req.query;

  // search by title
  if (search) {
    movies = movies.filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // filter by genre
  if (genre) {
    movies = movies.filter((m) =>
      m.genres?.includes(genre)
    );
  }

  // pagination
  const start = (Number(page) - 1) * limit;
  const end = start + Number(limit);  // in case limit is passed as a string

  const paginated = movies.slice(start, end);

  res.json({
    total: movies.length,
    page: Number(page),
    limit: Number(limit),
    data: paginated,
  });
};



// EOSC