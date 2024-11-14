// models/rolModelo.js
const db = require('../config/db');

const Rol = {
    getAllRoles: (callback) => {
        const query = 'SELECT id_rol, nombre_rol FROM rol';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
};

module.exports = Rol;
