import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

if (DB_URL) {
  mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
} else {
  console.warn('DB_URL is not defined in environment variables');
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
