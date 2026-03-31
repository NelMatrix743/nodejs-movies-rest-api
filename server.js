import app from "./src/app.js";
import { initDB } from "./src/db/memory.db.js";


initDB(); // load all movies into memory at startup  (in-memory db)

const port = 3000;

app.listen(port, () => {
  console.log(
    `Movies REST API system listening on port ${port}\nURL: http://localhost:3000/`
  );
});

// EOSC