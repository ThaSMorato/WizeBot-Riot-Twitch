import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';
import './routes';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333);