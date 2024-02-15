const express = require('express');
const router = express.Router();
const citaControllers = require('../controllers/citaControllers');

// Obtener citas
router.get('/cita', citaControllers.getCitas)

// Obtener cita por ID
router.get('/cita/:idCita', citaControllers.getCitaById);

// Crear citas
router.post('/cita', citaControllers.createCita)

// Eliminar una cita por ID
router.delete('/cita/:idCita', citaControllers.deleteCita);

module.exports = router;