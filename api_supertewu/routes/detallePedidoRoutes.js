const express = require('express');
const router = express.Router();
const detallePedidoController = require('../controllers/detallePedidoController');

// Ruta para obtener todos los detalles de pedidos
router.get('/detalle_pedido', detallePedidoController.getDetallePedido);

// Ruta para obtener un detalle de pedido por ID
router.get('/detalle_pedido/:id', detallePedidoController.getDetallePedidoById);

module.exports = router;
