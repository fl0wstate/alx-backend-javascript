#!/usr/bin/node
import express from 'express';
import mapRoutes from './routes/index';

/**
 * Create an express server and map routes
 * @type {express}
 */

const app = express();
const port = 1245;

mapRoutes(app);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
