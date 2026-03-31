import express from "express";
import * as controller from "../controllers/movies.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createMovieSchema,
  updateMovieSchema,
} from "../validations/movies.validation.js";


const router = express.Router();

// GET Requests
router.get("/", controller.getMovies);
router.get("/:id", controller.getMovie);

// POST Requests (apply validation middleware)
router.post("/", validate(createMovieSchema), controller.createMovie);

// UPDATE Requests (apply validation middleware)
router.put("/:id", validate(updateMovieSchema), controller.updateMovie);

// DELETE Requests
router.delete("/:id", controller.deleteMovie);

export default router;


// EOSC