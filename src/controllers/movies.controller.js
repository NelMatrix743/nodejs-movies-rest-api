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


// GET /api/movies/:id
export const getMovie = (req, res) => {
  const { id } = req.params;

  const movie = service.getMovieById(id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json({ id, ...movie });
};


// POST /api/movies
export const createMovie = (req, res) => {
  const newMovie = service.createMovie(req.body);

  res.status(201).json(newMovie);
};


// PUT /api/movies/:id
export const updateMovie = (req, res) => {
  const { id } = req.params;

  const updated = service.updateMovie(id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(updated);
};


// DELETE /api/movies/:id
export const deleteMovie = (req, res) => {
  const { id } = req.params;

  const deleted = service.deleteMovie(id);

  if (!deleted) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json({ message: "Movie deleted successfully" });
};



// EOSC