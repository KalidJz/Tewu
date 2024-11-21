// routes/pedidoRoutes.js
const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Ruta para obtener pedidos por fecha
router.get('/ventas', pedidoController.getPedidosPorFecha);

module.exports = router;
