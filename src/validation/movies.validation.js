import Joi from "joi";



export const createMovieSchema = Joi.object({
  title: Joi.string().min(1).required(),

  release_year: Joi.number().integer().min(1800).max(2100).required(),

  age_certification: Joi.string().allow("").optional(),

  runtime: Joi.number().integer().min(1).required(),

  genres: Joi.array().items(Joi.string()).required(),

  production_countries: Joi.array().items(Joi.string()).required(),

  seasons: Joi.string().allow("").optional(),

  imdb_score: Joi.number().min(0).max(10).optional(),

  imdb_votes: Joi.number().integer().min(0).optional(),
});


export const updateMovieSchema = Joi.object({
  title: Joi.string().min(1),

  release_year: Joi.number().integer().min(1800).max(2100),

  age_certification: Joi.string().allow(""),

  runtime: Joi.number().integer().min(1),

  genres: Joi.array().items(Joi.string()),

  production_countries: Joi.array().items(Joi.string()),

  seasons: Joi.string().allow(""),

  imdb_score: Joi.number().min(0).max(10),

  imdb_votes: Joi.number().integer().min(0),
});



// EOSC