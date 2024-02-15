const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 8080;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
  }));
app.use(express.json());
app.use(morgan('dev'));

const citaRouter = require('./routes/cita_router');
app.use(citaRouter);


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});