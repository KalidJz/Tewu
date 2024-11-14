// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/usuariosController');

// Ruta de inicio de sesión
router.post('/login', authController.login);

// Ruta de registro de usuario
router.post('/register', authController.register);

// Ruta para obtener todos los usuarios
router.get('/usuarios', authController.getUsers);

// Ruta para modificar los usuarios
router.put('/usuarios/:id', authController.updateUser);

//Ruta para eliminar los usuarios
router.delete('/usuarios/:id', authController.deleteUser);

module.exports = router;
