// models/categoriaModelo.js
const db = require('../config/db');

const Categoria = {
  getAllCategory: (callback) => {
    const query = 'SELECT * FROM categoria';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  createCategory: (nombre_categoria, callback) => {
    const query = 'INSERT INTO categoria (nombre_categoria) VALUES (?)';
    db.query(query, [nombre_categoria], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  getCategoryById: (id, callback) => {
    const query = 'SELECT * FROM categoria WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  updateCategory: (id, nombre_categoria, callback) => {
    // Asegúrate de que id y nombre_categoria sean cadenas o números
    const query = 'UPDATE categoria SET nombre_categoria = ? WHERE id_categoria = ?';
    db.query(query, [nombre_categoria, id], (err, results) => {
        if (err) {
            return callback(err);
        }
        if (results.affectedRows === 0) {
            return callback(new Error('Categoría no encontrada'));
        }
        callback(null, results);
    });
  },

    deleteCategory: (id, callback) => {
        const query = 'DELETE FROM categoria WHERE id_categoria = ?'; 
        db.query(query, [id], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },

};

module.exports = Categoria;
