import express from 'express';
import {helouWorld} from './routes';

const app = express();

app.get('/', helouWorld);

app.listen(3333);