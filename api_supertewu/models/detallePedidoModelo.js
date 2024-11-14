const db = require('../config/db');

const DetallePedido = {
    // Obtener todos los detalles de pedidos junto con fecha, total y nombre del producto
    getAllDetallePedido: (callback) => {
        const query = `
            SELECT dp.id_detalle_pedido, dp.id_pedido, dp.cantidad, 
                   p.fecha_pedido, p.total_pedido, pr.nombre_producto
            FROM detalle_pedido AS dp
            INNER JOIN pedido AS p ON dp.id_pedido = p.id_pedido
            INNER JOIN producto AS pr ON dp.id_producto = pr.id_producto
        `;
        db.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    },

    // Obtener un detalle de pedido por su ID
    getDetallePedidoById: (id, callback) => {
        const query = 'SELECT * FROM detalle_pedido WHERE id_detalle_pedido = ?';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }
};

module.exports = DetallePedido;
