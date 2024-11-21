const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Ruta para agregar un producto
router.post('/productos', productosController.addProduct);

// Ruta para obtener todos los productos
router.get('/productos', productosController.getProduct);

// Ruta para actualizar un producto por su ID
router.put('/productos/:id', productosController.updateProduct); 

// Ruta para eliminar un producto por su ID
router.delete('/productos/:id', productosController.deleteProduct);

module.exports = router;
