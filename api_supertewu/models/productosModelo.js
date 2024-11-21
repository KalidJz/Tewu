const db = require('../config/db');

const Producto = {
  // Método para crear un nuevo producto
  create: (data, callback) => {
    const query = 'INSERT INTO producto (nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_proveedor, id_categoria) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [data.nombre, data.descripcion, data.precio, data.cantidad, data.proveedor, data.categoria];
    
    db.query(query, values, (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  // Método para obtener todos los productos
  getAllProduct: (callback) => {
    const query = 'SELECT * FROM producto';
    db.query(query, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  // Método para actualizar un producto por su ID
  updateProductById: (id, newData, callback) => {
    const query = 'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio_producto = ?, cantidad_producto = ?, id_proveedor = ?, id_categoria = ? WHERE id_producto = ?';
    db.query(query, [newData.nombre_producto, newData.descripcion_producto, newData.precio_producto, newData.cantidad_producto, newData.id_proveedor, newData.id_categoria, id], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  // Método para eliminar un producto por su ID
  deleteProductById: (id, callback) => {
    const query = 'DELETE FROM producto WHERE id_producto = ?';
    db.query(query, [id], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }
};

module.exports = Producto;
