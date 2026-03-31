import express from "express";
import morgan from "morgan";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.config.js";

import movieRoutes from "./routes/movies.routes.js";


const app = express();

app.use(express.json()); // parse JSON request bodies
app.use(morgan("dev")); // log HTTP requests
app.use(cors()); // allow cross-origin requests


// movies routes
app.use("/api/movies", movieRoutes);

// swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// 404 Handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});


const BASE_RESPONSE = `
  <h1 style='width: 100%;font-family:consolas;font-size: 90px;text-align: center;padding: 50px 10px 0px;'>
    MOVIES REST API
  </h1>
  <p style="font-family:consolas;font-weight: 800;text-align:center;">
    SERVER STATUS: <span style="color: white; background: green; padding: 10px 20px; border-radius: 10px">ACTIVE</span>
  </p>
`;

app.get('/', (req, res) => {
  res.send(BASE_RESPONSE);
});


export default app;


// EOSC