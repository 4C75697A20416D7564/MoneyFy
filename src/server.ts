import express from 'express';
import swagger from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import "./database";


import { routes } from './routes';

const app = express();
const PORT = 3333;

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log('Server está Rodando\nURL: localhost \nPORTA: '+PORT);
});
