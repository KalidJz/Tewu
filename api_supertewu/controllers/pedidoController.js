// controllers/pedidoController.js
const Pedido = require('../models/pedidoModelo');

// Controlador para obtener pedidos y sus detalles por fecha
const getPedidosPorFecha = (req, res) => {
    const { fecha } = req.query;

    if (!fecha) {
        return res.status(400).json({ success: false, message: 'La fecha es obligatoria' });
    }

    Pedido.getPedidosPorFecha(fecha, (err, pedidos) => {
        if (err) {
            console.error('Error al obtener pedidos por fecha:', err);
            return res.status(500).json({ success: false, message: 'Error al obtener pedidos' });
        }
        res.json({ success: true, ventas: pedidos });
    });
};

module.exports = {
    getPedidosPorFecha
};
