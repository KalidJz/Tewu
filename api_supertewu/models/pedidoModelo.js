// models/pedidoModelo.js
const db = require('../config/db');

const Pedido = {
    // Obtener pedidos y detalles por fecha
    getPedidosPorFecha: (fecha, callback) => {
        const query = `
            SELECT p.id_pedido, p.fecha_pedido, p.total_pedido, dp.cantidad, pr.nombre_producto
            FROM pedido AS p
            INNER JOIN detalle_pedido AS dp ON p.id_pedido = dp.id_pedido
            INNER JOIN producto AS pr ON dp.id_producto = pr.id_producto
            WHERE DATE(p.fecha_pedido) = ?
        `;
        db.query(query, [fecha], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
};

module.exports = Pedido;
