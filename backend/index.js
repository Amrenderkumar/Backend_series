import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import Db from './DB/database.js';

Db();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

