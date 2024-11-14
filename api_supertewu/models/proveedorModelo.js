const db = require('../config/db');

const Proveedor = {
    // Obtener todos los proveedores
    getAll: (callback) => {
        const query = 'SELECT * FROM proveedor';
        db.query(query, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    // Obtener un proveedor por ID
    getById: (id, callback) => {
        const query = 'SELECT * FROM proveedor WHERE id_proveedor = ?';
        db.query(query, [id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result[0]);
        });
    },

    // Crear un nuevo proveedor
    create: (data, callback) => {
        const query = 'INSERT INTO proveedor (nombre_proveedor, telefono_proveedor, direccion_proveedor, correo_proveedor) VALUES (?, ?, ?, ?)';
        db.query(query, [data.nombre_proveedor, data.telefono_proveedor, data.direccion_proveedor, data.correo_proveedor], (err, result) => {
            if (err) return callback(err, null);
            callback(null, { id: result.insertId, ...data });
        });
    },

    // Actualizar un proveedor por ID
    updateById: (id, data, callback) => {
        const query = 'UPDATE proveedor SET nombre_proveedor = ?, telefono_proveedor = ?, direccion_proveedor = ?, correo_proveedor = ? WHERE id_proveedor = ?';
        db.query(query, [data.nombre_proveedor, data.telefono_proveedor, data.direccion_proveedor, data.correo_proveedor, id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    },
    
    // Eliminar un proveedor por ID
    deleteById: (id, callback) => {
        const query = 'DELETE FROM proveedor WHERE id_proveedor = ?';
        db.query(query, [id], (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    }
};

module.exports = Proveedor;
