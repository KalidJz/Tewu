const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

// Ruta para realizar la compra
router.post('/comprar', compraController.realizarCompra);

module.exports = router;
