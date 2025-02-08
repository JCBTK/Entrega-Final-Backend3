import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API E-Commerce",
            version: "1.0.0",
            description: "Documentación detallada de la API para la entrega final",
        },
        servers: [{ url: "http://localhost:8080" }],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
export default (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};