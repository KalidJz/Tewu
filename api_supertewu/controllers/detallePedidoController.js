const DetallePedido = require('../models/detallePedidoModelo');

// Obtener todos los detalles de pedidos
const getDetallePedido = (req, res) => {
    DetallePedido.getAllDetallePedido((err, detalles) => {
        if (err) return res.status(500).json({ error: 'Error al obtener los detalles de pedidos' });
        res.json({ success: true, detalles });
    });
};

// Obtener un detalle de pedido por su ID
const getDetallePedidoById = (req, res) => {
    const { id } = req.params;
    DetallePedido.getDetallePedidoById(id, (err, detalle) => {
        if (err) return res.status(500).json({ error: 'Error al obtener el detalle del pedido' });
        if (!detalle) return res.status(404).json({ error: 'Detalle del pedido no encontrado.' });
        res.json({ success: true, data: detalle });
    });
};


module.exports = {
    getDetallePedido,
    getDetallePedidoById
};
