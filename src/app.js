import express from "express";
import morgan from "morgan";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const BASE_RESPONSE = `
	<h1 style='font-family:consolas; font-size: 100px;'>Hello, World!</h1>
`;

app.get('/', (req, res) => {
  res.send(BASE_RESPONSE);
});


export default app;

// EOSC