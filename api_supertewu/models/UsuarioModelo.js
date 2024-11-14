// models/userModel.js
const db = require('../config/db');

const User = {
    //Comprobar Usuario
    findByUsername: (usuario, callback) => {
        const query = 'SELECT * FROM usuario WHERE cod_usuario = ?';
        db.query(query, [usuario], (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results[0]);
        });
    },

    //Registrar Nuevo Usuario
    create: (usuarioData, callback) => {
        const query = 'INSERT INTO usuario (cod_usuario, nombre_completo, email, contrasena, id_rol) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [usuarioData.codUsuario, usuarioData.nombre, usuarioData.email, usuarioData.contrasena, usuarioData.rol], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, { id: result.insertId, ...usuarioData });
        });
    },

    //Consultar Usuario
    getAllUsers: (callback) => {
        const query = 'SELECT * FROM usuario';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },

    //Modificar Usuario
    updateUserById: (id, newData, callback) => {
        const query = 'UPDATE usuario SET nombre_completo = ?, email = ?, contrasena = ?, id_rol = ? WHERE id_usuario = ?';
        db.query(query, [newData.nombre_completo, newData.email, newData.contrasena, newData.rol, id], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result);
        });
    },


    //Eliminar Usuario
    deleteUserById: (id, callback) => {
        const query = 'DELETE FROM usuario WHERE id_usuario = ?';
        db.query(query, [id], (err, result) => {
          if (err) {
            return callback(err, null);
          }
          callback(null, result);
        });
      }
};

module.exports = User;
