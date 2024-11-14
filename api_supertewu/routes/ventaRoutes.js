// routes/venta.js
const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Ruta para realizar la venta de un producto
router.post('/venta', ventaController.realizarVenta);

module.exports = router;
