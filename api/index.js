import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);

app.listen(process.env.PORT_NUMBER || 3000, () => {
  console.log('Server listening on port 3000');
});
