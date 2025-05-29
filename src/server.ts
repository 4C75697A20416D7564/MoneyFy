import express from 'express';
import { categoriesRouter } from './routes/categories.routes';
import { specificationsRouter } from './routes/specifications.routes';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/categories', categoriesRouter);

app.use('/specifications', specificationsRouter);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
