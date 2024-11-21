const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Ruta para obtener todos los proveedores
router.get('/proveedores', proveedorController.getAllProveedores);

// Ruta para obtener un proveedor por ID
router.get('/proveedores/:id', proveedorController.getProveedorById);

// Ruta para crear un nuevo proveedor
router.post('/proveedores', proveedorController.createProveedor);

// Ruta para actualizar un proveedor por ID
router.put('/proveedores/:id', proveedorController.updateProveedor);

// Ruta para eliminar un proveedor por ID
router.delete('/proveedores/:id', proveedorController.deleteProveedor);

module.exports = router;
