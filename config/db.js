const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: 'localhost', // Cambia esto por la dirección de tu servidor de base de datos
  user: 'root', // Cambia esto por tu nombre de usuario de MySQL
  password: 'root', // Cambia esto por tu contraseña de MySQL
  database: 'franklin_db' // Cambia esto por el nombre de tu base de datos
};

// Crea la conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Conexión a la base de datos
connection.connect(error => {
  if (error) {
    console.error('Error de conexión a la base de datos:', error);
  } else {
    console.log('Conexión a la base de datos establecida');
  }
});

module.exports = connection;
