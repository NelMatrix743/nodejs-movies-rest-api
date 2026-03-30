import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// retrieve full path for the JSON database
const databasePath = path.join(__dirname, "../../database/database.json");

export const readData = () => {
  const data = fs.readFileSync(databasePath);
  return JSON.parse(data);
};

export const writeData = (data) => {
  fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
};