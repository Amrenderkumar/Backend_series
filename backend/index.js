import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import app from './src/app.js';
import Db from './DB/database.js';

Db();

app.use(express.json());


app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});

