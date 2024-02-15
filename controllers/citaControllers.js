const getCitas = (req, res) => {
    const query = 'SELECT * FROM citas';
    connection.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error'});
            return;
        }
        if (result.length > 0) {
            res.json(result);
        } else {
            res.status(404).json({ message: "No hay citas disponibles" });
        }
    });
}

const getCitaById = (req, res) => {
    const id_cita = req.params.id;
    const query = `SELECT * FROM citas WHERE id = ?`;
    connection.query(query, [id_cita], (err, result) =>{
        if (err || result.length === 0){
            res.status(404).json({message:"La cita no existe"});
        }else{
            res.json(result[0]);
        }
    });
};

const createCita = (req,res)=>{
    const citaCreate = req.body;

    const query = "INSERT INTO citas (usuario_id, sucursal_id, doctor_id, fecha, hora) VALUES (?, ?, ?, ?, ?)";
    const values = [citaCreate.usuario_id, citaCreate.sucursal_id, citaCreate.doctor_id, citaCreate.fecha, citaCreate.hora];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        res.status(201).json({ id: result.insertId, message: 'Cita creada exitosamente' });
    });
}

const connection = require('../config/db');

const deleteCita = (req, res) => {
    const id_cita = req.params.id; // Corregido para que coincida con el parámetro en la ruta

    const query = 'DELETE FROM citas WHERE id = ?';
    connection.query(query, [id_cita], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'La cita no existe' });
        } else {
            res.json({ message: 'Cita eliminada correctamente' });
        }
    });
};


module.exports = {
    getCitas,
    getCitaById,
    createCita,
    deleteCita,
}