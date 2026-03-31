import express from "express";
import * as controller from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", controller.getMovies);
router.get("/:id", controller.getMovie);
router.post("/", controller.createMovie);
router.put("/:id", controller.updateMovie);
router.delete("/:id", controller.deleteMovie);

export default router;


// EOSC