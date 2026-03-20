import express from 'express';
import route from '../routes/post.routes.js';
const app = express();

app.use(express.json());

app.use('/api/posts', route);

export default app; 