import { fileURLToPath } from "url";
import expressJSDocSwagger from "express-jsdoc-swagger";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const options = {
  info: {
    version: "1.0.0",
    title: "My API",
    description: "API Documentation",
  },
  baseDir: __dirname,
  filesPattern: "../routes/**/*.js",
  swaggerUIPath: "/api-docs",
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
};

export const createSwaggerDocs = (app) => expressJSDocSwagger(app)(options);


