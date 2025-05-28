const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'sucre360editorsecret',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Utilidades
const DATA_PATH = path.join(__dirname, 'data/contenido.json');
const getData = () => JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const saveData = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

// Rutas públicas
app.get('/', (req, res) => {
  const contenido = getData();
  res.render('index', { contenido });
});

// Editor con login
app.get('/editor', (req, res) => {
  const contenido = getData();
  if (req.session && req.session.authenticated) {
    res.render('editor', { contenido, error: null, loggedIn: true });
  } else {
    res.render('editor', { contenido, error: null, loggedIn: false });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Gworker' && password === 'G0526') {
    req.session.authenticated = true;
    res.redirect('/editor');
  } else {
    const contenido = getData();
    res.render('editor', { contenido, error: 'Credenciales incorrectas.', loggedIn: false });
  }
});

app.post('/guardar', (req, res) => {
  if (!req.session.authenticated) return res.status(401).send('No autorizado');
  const { heroTitulo, heroDescripcion, quienesSomos, lugares } = req.body;
  const nuevoContenido = {
    heroTitulo,
    heroDescripcion,
    quienesSomos,
    lugares: JSON.parse(lugares)
  };
  saveData(nuevoContenido);
  res.redirect('/editor');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
