import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MOVIES REST API",
      version: "1.0.0",
      description: "Simple Movies REST API built with NodeJS and ExpressJS",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // where swagger reads annotations
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;


// EOSC