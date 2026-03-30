import express from 'express';


const app = express();

const RESPONSE = `
	<h1 style='font-family:consolas; font-size: 100px;'>Hello, World!</h1>
`;

app.get('/', (req, res) => {
  res.send(RESPONSE)
});


export default app;