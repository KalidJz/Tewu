const Proveedor = require('../models/proveedorModelo');

// Obtener todos los proveedores
const getAllProveedores = (req, res) => {
    Proveedor.getAll((err, proveedores) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los proveedores' });
        }
        res.json({ success: true, proveedores });
    });
};

// Obtener un proveedor por ID
const getProveedorById = (req, res) => {
    const id = req.params.id;
    Proveedor.getById(id, (err, proveedor) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener el proveedor' });
        }
        if (!proveedor) {
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        }
        res.json({ success: true, proveedor });
    });
};



// Crear un nuevo proveedor
const createProveedor = (req, res) => {
    const data = req.body;
    Proveedor.create(data, (err, newProveedor) => {
        if (err) {
            return res.status(500).json({ error: 'Error al crear el proveedor' });
        }
        res.json({ success: true, mensaje: 'Proveedor creado con éxito', proveedor: newProveedor });
    });
};

// Actualizar un proveedor por ID
const updateProveedor = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Proveedor.updateById(id, data, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el proveedor' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        }
        res.json({ success: true, mensaje: 'Proveedor actualizado con éxito' });
    });
};

// Eliminar un proveedor por ID
const deleteProveedor = (req, res) => {
    const id = req.params.id;
    Proveedor.deleteById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar el proveedor' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Proveedor no encontrado' });
        }
        res.json({ success: true, mensaje: 'Proveedor eliminado con éxito' });
    });
};

module.exports = {
    getAllProveedores,
    getProveedorById,
    createProveedor,
    updateProveedor,
    deleteProveedor
};
