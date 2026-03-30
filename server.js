import app from "./src/app.js";


const port = 3000;

app.listen(port, () => {
  console.log(
    `Movies REST API system listening on port ${port}\nURL: http://localhost:3000/`
  );
});

// EOSC