const express = require('express');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/profile', (req, res) => {
  res.render('profile', { nama: 'Nama Mahasiswa', nim: 'NIM Mahasiswa' });
});

app.get('/list_mahasiswa', (req, res) => {
  const mahasiswa = require('./data/mahasiswa.json');
  res.render('list_mahasiswa', { mahasiswa: mahasiswa });
});

// Server listening
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
