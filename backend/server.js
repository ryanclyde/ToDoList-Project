import express from 'express';
const app = express();
import dbRoutes from './routes/databaseAccess.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
