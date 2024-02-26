import swaggerAutogen from "swagger-autogen"
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    info: {
        title: 'API Doc Prueba',
        descripcion: 'Descripcion',
    },
    host: 'localhost:3000/api',
    basePath: '/',
    schemes: ['http'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header'
        }
    }
};

const  options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js']
};

export const swaggerSpec = swaggerJSDoc(options);

const outputFile = './swagger-output.json';
const routes = ['./src/routes/users.routes.js'];

swaggerAutogen()(outputFile, routes, swaggerDefinition).then(async () => {
    await import('./src/index.js');
});




