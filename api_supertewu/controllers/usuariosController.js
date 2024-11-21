// controllers/authController.js
const User = require('../models/UsuarioModelo');

// Controlador de inicio de sesión

const login = (req, res) => {
    const { usuario, contrasena } = req.body;
  
    User.findByUsername(usuario, (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Error en el servidor' });
      }
  
      if (!user) {
        return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
      }
  
      if (user.contrasena === contrasena) {
        return res.json({
          success: true,
          message: 'Inicio de sesión exitoso',
          id_usuario: usuario,  // Devuelve el id_usuario
          id_rol: user.id_rol,
          nombre_completo: user.nombre_completo, // Devuelve el nombre del usuario
        });
      } else {
        return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
      }
    });
  };
  
  

// Controlador de registro de usuario
const register = (req, res) => {
    const { codUsuario, nombre, email, contrasena, rol } = req.body;
    const usuarioData = { codUsuario, nombre, email, contrasena, rol };

    User.create(usuarioData, (err, newUser) => {
        if (err) {
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
        res.json({ success: true, mensaje: 'Usuario registrado con éxito', usuario: newUser });
    });
};

// Controlador para obtener todos los usuarios
const getUsers = (req, res) => {
    User.getAllUsers((err, users) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
        res.json({ success: true, usuarios: users });
    });
};

//Controlador Para Modificar Usuario
const updateUser = (req, res) => {
    const userId = req.params.id; // ID del usuario a modificar
    const { nombre_completo, email, contrasena, rol } = req.body; // Nuevos datos a actualizar

    User.updateUserById(userId, { nombre_completo, email, contrasena, rol }, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, mensaje: 'Error al actualizar el usuario' });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, mensaje: 'Usuario no encontrado' });
        }

        res.json({ success: true, mensaje: 'Usuario actualizado correctamente' });
    });
};

const getLastCodUsuario = (req, res) => {
    User.getLastCodUsuario((err, lastCodUsuario) => {
        if (err) {
            return res.status(500).json({ success: false, error: 'Error al obtener el último código de usuario' });
        }
        res.json({ success: true, lastCodUsuario });
    });
};

//Controlador para Eliminar Usuario
const deleteUser = (req, res) => {
    const userId = req.params.id; // ID del usuario a eliminar
  
    User.deleteUserById(userId, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, mensaje: 'Error al eliminar el usuario' });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, mensaje: 'Usuario no encontrado' });
      }
  
      res.json({ success: true, mensaje: 'Usuario eliminado correctamente' });
    });
  };


module.exports = {
    login,
    register,
    getUsers,
    updateUser,
    getLastCodUsuario,
    deleteUser
};