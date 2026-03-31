import express from "express";
import * as controller from "../controllers/movies.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createMovieSchema,
  updateMovieSchema,
} from "../validations/movies.validation.js";


const router = express.Router();


/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movie metadata
 *     description: Retrieve all movies with optional filtering and pagination
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: List of movies
 */
router.get("/", controller.getMovies);

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get movie metadata by ID
 *     description: Retrieve a single movie metadata using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie found
 *       404:
 *         description: Movie not found
 */
router.get("/:id", controller.getMovie);

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create new movie metadata
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               release_year:
 *                 type: number
 *               age_certification:
 *                 type: string
 *               runtime:
 *                 type: number
 *               genres:
 *                 type: array
 *                 items:
 *                   type: string
 *               production_countries:
 *                 type: array
 *                 items:
 *                   type: string
 *               seasons:
 *                 type: string
 *               imdb_score:
 *                 type: number
 *               imdb_votes:
 *                 type: number
 *     responses:
 *       201:
 *         description: Movie created
 */
router.post("/", validate(createMovieSchema), controller.createMovie);


/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update a movie
 *     description: Update the fields of an already existing movie metadata
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               release_year:
 *                 type: number
 *               age_certification:
 *                 type: string
 *               runtime:
 *                 type: number
 *               genres:
 *                 type: array
 *                 items:
 *                   type: string
 *               production_countries:
 *                 type: array
 *                 items:
 *                   type: string
 *               seasons:
 *                 type: string
 *               imdb_score:
 *                 type: number
 *               imdb_votes:
 *                 type: number
 *     responses:
 *       200:
 *         description: Movie updated
 *       404:
 *         description: Movie not found
 */
router.put("/:id", validate(updateMovieSchema), controller.updateMovie);


/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete movie metadata
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete("/:id", controller.deleteMovie);

export default router;


// EOSC