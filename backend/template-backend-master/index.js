const express = require('express');
const cors = require('cors');
const { db } = require('./conf');

const app = express();
app.use(cors());

app.get('/Members', async (req, res) => {
  const [results] = await db.query('SELECT Name, Quality, Avatar FROM members');
  res.json(results);
});

app.use('/', (req, res) => {
  res.status(404).send('Route not found! ');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
