// controllers/rolController.js
const Rol = require('../models/rolModelo');

const getRoles = (req, res) => {
    Rol.getAllRoles((err, roles) => {
        if (err) {
            console.error('Error al obtener los roles:', err);
            return res.status(500).json({ error: 'Error al obtener los roles' });
        }
        res.json({ success: true, roles });
    });
};

module.exports = {
    getRoles
};
