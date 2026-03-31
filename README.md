# Movies REST API



A simple Movies REST API built with Node.js and Express.js. This API provides endpoints to manage a collection of movies, including creating, retrieving, updating, and deleting movie records.





---

## Table of Contents

- [Movies REST API](#movies-rest-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Requirements](#requirements)
  - [Setup \& Installation](#setup--installation)
    - [1. Clone the repository](#1-clone-the-repository)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Prepare the database](#3-prepare-the-database)
  - [Running the Project](#running-the-project)
    - [Start the server](#start-the-server)
    - [Server URL](#server-url)
  - [API Endpoints](#api-endpoints)
    - [Query Parameters (GET /api/movies)](#query-parameters-get-apimovies)
  - [Swagger Documentation](#swagger-documentation)
  - [Testing](#testing)
    - [Using Swagger UI](#using-swagger-ui)
    - [Using Postman / HTTP client](#using-postman--http-client)
  - [License](#license)
  - [Notes](#notes)
- [Enjoy using the Movies REST API](#enjoy-using-the-movies-rest-api)

---

## Features

- Fully functional **CRUD** endpoints for movies
- In-memory storage with persistence to a JSON file (`database.json`)
- Validation of movie data using **Joi**
- Filter movies by **title** and **genre**
- Pagination support for large datasets
- Interactive API testing using **Swagger UI**

---

## Project Structure

```
nodejs-movies-rest-api/
│
├─ src/
│   ├─ controllers/
│   │   └─ movies.controller.js
│   ├─ db/
│   │   └─ memory.db.js
│   ├─ middlewares/
│   │   └─ validate.middleware.js
│   ├─ routes/
│   │   └─ movies.routes.js
│   ├─ services/
│   │   └─ movies.service.js
│   ├─ utils/
│   │   └─ fileHandler.js
│   ├─ docs/
│   │   └─ swagger.config.js
│   ├─ validations/
│   │   └─ movies.validation.js
│   │
│   └─ app.js
│
├─ package.json
└─ README.md
```

---

## Requirements

- Node.js v20+  
- npm v10+  

Optional tools:

- Postman or any HTTP client
- Web browser for Swagger UI

---

## Setup & Installation

### 1. Clone the repository

```
git clone https://github.com/NelMatrix743/nodejs-movies-rest-api
cd nodejs-movies-rest-api
```

### 2. Install dependencies

```
npm install
```

This installs required packages which are:

- express
- cors
- morgan
- joi
- swagger-ui-express
- swagger-jsdoc

### 3. Prepare the database

Ensure `database.json` exists in a database/ directory under the root directory.

Example of a movie metadata:

```json
{
  "1": {
    "title": "Example Movie",
    "release_year": 2026,
    "age_certification": "PG-13",
    "runtime": 120,
    "genres": ["action", "adventure"],
    "production_countries": ["US"],
    "seasons": "",
    "imdb_score": 7.8,
    "imdb_votes": 15000
  }
}
```

---

## Running the Project

### Start the server

```
npm run dev
```

Or (if using nodemon):

```
nodemon server.js
```
(NPM script)
```
npm run watch
```

### Server URL

```
http://localhost:3000
```

---

## API Endpoints

Base URL:

```
/api/movies
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Get all movie metadata |
| GET    | `/:id`   | Get movie metadata by ID |
| POST   | `/`      | Create new movie metadata |
| PUT    | `/:id`   | Update an existing movie metadata |
| DELETE | `/:id`   | Delete an existing movie metadata |

---

### Query Parameters (GET /api/movies)

| Parameter | Description |
|----------|-------------|
| search   | Filter by title |
| genre    | Filter by genre |
| page     | Page number (default: 1) |
| limit    | Items per page (default: 10) |

---

## Swagger Documentation

Access Swagger UI at:

```
http://localhost:3000/api-docs
```

Features:

- Interactive endpoint testing
- Request/response schemas
- Clean API documentation

---

## Testing

### Using Swagger UI

Open:

```
http://localhost:3000/api-docs
```

### Using Postman / HTTP client

Example POST request:

```json
{
  "title": "The Odyssey",
  "release_year": 2026,
  "age_certification": "PG-13",
  "runtime": 150,
  "genres": ["adventure", "fantasy", "drama"],
  "production_countries": ["US"],
  "seasons": "",
  "imdb_score": 8.2,
  "imdb_votes": 12000
}
```

---

## License

This project is open-source and free to use.

---

## Notes

- Uses an in-memory JSON database for simplicity
- Data persists to `database.json`
- Joi ensures all incoming data is validated

---

# Enjoy using the Movies REST API

---