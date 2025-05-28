// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configuración
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Datos
const DATA_PATH = path.join(__dirname, 'data/contenido.json');
const getData = () => JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const saveData = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

// Rutas
app.get('/', (req, res) => {
  const contenido = getData();
  res.render('index', { contenido });
});

app.get('/editor', (req, res) => {
  const contenido = getData();
  res.render('editor', { contenido, error: null });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const storedUser = 'Gworker';
  const storedHash = bcrypt.hashSync('G0526', 10);
  const success = username === storedUser && bcrypt.compareSync(password, storedHash);
  if (success) {
    res.redirect('/editor');
  } else {
    const contenido = getData();
    res.render('editor', { contenido, error: 'Credenciales incorrectas.' });
  }
});

app.post('/guardar', (req, res) => {
  const { heroTitulo, heroDescripcion, quienesSomos, lugares } = req.body;
  const parsed = {
    heroTitulo,
    heroDescripcion,
    quienesSomos,
    lugares: JSON.parse(lugares)
  };
  saveData(parsed);
  res.redirect('/editor');
});

// Inicio
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
