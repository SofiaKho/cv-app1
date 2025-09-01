const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 3000;

// Startsida
app.get('/', (req, res) => {
  res.send(`
    <h1>Välkommen till Sofias CV-applikation! 🌟</h1>
    <p>Besök <a href="/cv">/cv</a> för att se innehåll i databasen.</p>
    <p>Besök <a href="/about">/about</a> för info om applikationen.</p>
  `);
});

// Hämta alla CV-poster
app.get('/cv', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cv');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Serverfel');
  }
});

// Info om applikationen
app.get('/about', (req, res) => {
  res.json({
    app: 'CV-applikation',
    version: '2.0',
    author: 'Sofia'
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servern körs på http://localhost:${PORT}`);
});

