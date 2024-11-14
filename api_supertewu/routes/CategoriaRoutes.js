// routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Ruta para crear una nueva categoría
router.post('/categorias', categoriaController.addCategory);

// Ruta para obtener todas las categorías
router.get('/categorias', categoriaController.getCategory);

// Ruta para obtener una categoría por ID
router.get('/categorias/:id', categoriaController.getCategoriaById);

// Ruta para actualizar una categoría
router.put('/categorias/:id', categoriaController.updateCategoria);

// Ruta para eliminar una categoría
router.delete('/categorias/:id', categoriaController.deleteCategoria);

module.exports = router;
