import express from 'express'
import usersRoutes from './routes/users.routes.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger-output.json' assert { type: "json" };
import { swaggerSpec } from '../swagger.js';

const app = express();

app.use(express.json())

app.use('/api', usersRoutes)

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    })
})

export default app; 