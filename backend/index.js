// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URI } = require('./config');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
