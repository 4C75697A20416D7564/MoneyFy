import express from 'express';
import swagger from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

import { routes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
