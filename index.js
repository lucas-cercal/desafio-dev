const express = require('express');
const exphbs = require('express-handlebars');

const conn = require('./db/conn');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const fileRoutes = require('./routes/fileRoutes');

// Template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Arquivos públicos
app.use(express.static('public'));

// Rotas
app.use('/', fileRoutes);
app.use('/upload', fileRoutes);

// Conexão com o banco de dados
conn.sync()
    .then(() => {
      app.listen(3000);
    })
    .catch((err) => {
      console.log(`\n${err}\n`);
    });