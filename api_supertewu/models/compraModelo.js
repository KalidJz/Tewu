const db = require('../config/db');

const Compra = {
    crearPedido: (id_usuario, total_pedido, callback) => {
        const query = 'INSERT INTO pedido (fecha_pedido, total_pedido, id_usuario) VALUES (NOW(), ?, ?)';
        db.query(query, [total_pedido, id_usuario], (err, result) => {
            if (err) return callback(err);
            callback(null, result.insertId); // Devuelve el id_pedido
        });
    },

    agregarDetallePedido: (id_pedido, id_producto, cantidad, callback) => {
        const query = 'INSERT INTO detalle_pedido (id_pedido, id_producto, cantidad) VALUES (?, ?, ?)';
        db.query(query, [id_pedido, id_producto, cantidad], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },

    // Función para reducir el stock del producto
    reducirStockProducto: (id_producto, cantidad, callback) => {
        const query = 'UPDATE producto SET cantidad_producto = cantidad_producto - ? WHERE id_producto = ?';
        db.query(query, [cantidad, id_producto], (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    }
};

module.exports = Compra;
