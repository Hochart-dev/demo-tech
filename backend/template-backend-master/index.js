const express = require('express');
const cors = require('cors');
const { db } = require('./conf');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/members', async (req, res) => {
  const [results] = await db.query('SELECT Name, Quality, Avatar FROM members');
  res.json(results);
});

app.post('/members', async (req, res) => {
  const { Name, Quality, Avatar } = req.body;
  const sql = 'INSERT INTO members (Name, Quality, Avatar) VALUES (?,?,?)';
  const sqlValues = [Name, Quality, Avatar];
  try {
    const [results] = await db.query(sql, sqlValues);
    res.status(201).json(results);
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).send('This user already exists!');
    }
    if (err.code === 'ER_BAD_NULL_ERROR') {
      return res.status(400).send('Please fill all fields!');
    }
    res.status(500).send('Generic error message! ');
  }
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
