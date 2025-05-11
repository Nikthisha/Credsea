import express from 'express';
import cors from 'cors';
import applicationRoutes from './routes/applicationRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/applications', applicationRoutes);

export default app;
