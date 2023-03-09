import express from 'express';
import morgan from 'morgan'; // Console
import path from 'path';
import cors from 'cors'; // middleware
import taskRoutes from './routes';

const app = express();

app.use(cors()); // Para comunicarnos con vue
app.use(morgan('dev')); // imprimir en consola
app.use(express.json()); // esta funcion hace que el back end pueda entender un json

app.use(express.static(path.join(__dirname,'..', '..', 'dist')))

app.use('/api', taskRoutes);

export default app;