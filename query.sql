CREATE DATABASE franklin_db;

USE franklin_db;

-- Tabla de Usuarios
CREATE TABLE usuarios (
   id INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   edad INT NOT NULL,
   correo VARCHAR(255) NOT NULL,
   contrasena VARCHAR(255) NOT NULL
);

-- Tabla de Ciudad
CREATE TABLE ciudad (
   id INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL
);

-- Tabla de Sucursal
CREATE TABLE sucursal (
   id INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   ciudad_id INT NOT NULL,
   FOREIGN KEY (ciudad_id) REFERENCES ciudad(id)
);

-- Tabla de Doctores
CREATE TABLE doctor (
   id INT AUTO_INCREMENT PRIMARY KEY,
   nombre VARCHAR(255) NOT NULL,
   sucursal_id INT NOT NULL,
   FOREIGN KEY (sucursal_id) REFERENCES sucursal(id)
);

-- Tabla de Citas
CREATE TABLE citas (
   id INT AUTO_INCREMENT PRIMARY KEY,
   usuario_id INT NOT NULL,
   sucursal_id INT NOT NULL,
   doctor_id INT NOT NULL,
   fecha DATE NOT NULL,
   hora TIME NOT NULL,
   FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
   FOREIGN KEY (sucursal_id) REFERENCES sucursal(id),
   FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

-- Inserción en la tabla de Ciudad
INSERT INTO ciudad (nombre) VALUES
('Ciudad A'),
('Ciudad B'),
('Ciudad C');

-- Inserción en la tabla de Sucursal
INSERT INTO sucursal (nombre, ciudad_id) VALUES
('Sucursal 1', 1),
('Sucursal 2', 1),
('Sucursal 3', 2),
('Sucursal 4', 2),
('Sucursal 5', 3);

-- Inserción en la tabla de Doctores
INSERT INTO doctor (nombre, sucursal_id) VALUES
('Dr. Juan', 1),
('Dr. Maria', 1),
('Dr. Carlos', 2),
('Dr. Laura', 2),
('Dr. Javier', 3),
('Dr. Ana', 4),
('Dr. Sofia', 5);

-- Inserción en la tabla de Usuarios
INSERT INTO usuarios (nombre, edad, correo, contrasena) VALUES
('Usuario 1', 30, 'usuario1@example.com', 'contraseña1'),
('Usuario 2', 35, 'usuario2@example.com', 'contraseña2'),
('Usuario 3', 40, 'usuario3@example.com', 'contraseña3');

-- Inserción en la tabla de Citas
INSERT INTO citas (usuario_id, sucursal_id, doctor_id, fecha, hora) VALUES
(1, 1, 1, '2024-02-20', '09:00:00'),
(2, 2, 3, '2024-02-21', '10:00:00'),
(3, 3, 5, '2024-02-22', '11:00:00');