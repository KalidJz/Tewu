// controllers/categoriaController.js
const Categoria = require('../models/categoriaModelo');

// Obtener todas las categorías
const getCategory = (req, res) => {
  Categoria.getAllCategory((err, categorias) => {
    if (err) return res.status(500).json({ error: 'Error al obtener las categorías' });
    res.json({ success: true, categorias });
  });
};

// Crear una nueva categoría
const addCategory = (req, res) => {
  const { nombre_categoria } = req.body;
  Categoria.createCategory(nombre_categoria, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al registrar la categoría' });
    res.status(201).json({ mensaje: 'Categoría registrada correctamente', categoriaId: result.insertId });
  });
};

// Obtener una categoría por ID
const getCategoriaById = (req, res) => {
  const { id } = req.params;
  Categoria.getCategoryById(id, (err, categoria) => {
    if (err) return res.status(500).json({ error: 'Error al obtener la categoría' });
    if (!categoria) return res.status(404).json({ error: 'Categoría no encontrada.' });
    res.json({ success: true, data: categoria });
  });
};

// Actualizar una categoría
const updateCategoria = (req, res) => {
  const { id } = req.params;
  const {nombre_categoria} = req.body;
  Categoria.updateCategory(id, nombre_categoria, (err, updatedCategoria) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar la categoría' });
    res.json({ success: true, data: updatedCategoria });
  });
};

// Eliminar una categoría
const deleteCategoria = (req, res) => {
  const { id } = req.params;
  Categoria.deleteCategory(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar la categoría' });
    res.json({ success: true, message: 'Categoría eliminada exitosamente.' });
  });
};

module.exports = {
  getCategory,
  addCategory,
  getCategoriaById,
  updateCategoria,
  deleteCategoria
};
