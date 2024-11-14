const Producto = require('../models/productosModelo');

// Controlador para agregar un nuevo producto
const addProduct = (req, res) => {
  const { nombre, descripcion, precio, cantidad, proveedor, categoria } = req.body;
  Producto.create({ nombre, descripcion, precio, cantidad, proveedor, categoria }, (err, resultado) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al registrar el producto: ' + err.message });
    }
    res.status(201).json({ mensaje: 'Producto registrado correctamente', producto: resultado });
  });
};

// Controlador para obtener todos los productos
const getProduct = (req, res) => {
  Producto.getAllProduct((err, productos) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los productos' });
    }
    res.json({ success: true, productos });
  });
};

// Controlador para actualizar un producto
const updateProduct = (req, res) => {
  const productId = req.params.id;
  const { nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_proveedor, id_categoria } = req.body;

  if (!nombre_producto || !descripcion_producto || !precio_producto || !cantidad_producto || !id_proveedor || !id_categoria) {
    return res.status(400).json({ success: false, mensaje: 'Todos los campos son obligatorios' });
  }

  Producto.updateProductById(productId, { nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_proveedor, id_categoria }, (err, result) => {
    if (err) {
      console.error('Error al actualizar producto:', err);
      return res.status(500).json({ success: false, mensaje: 'Error al actualizar el producto' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, mensaje: 'Producto no encontrado' });
    }
    res.json({ success: true, mensaje: 'Producto actualizado correctamente' });
  });
};

// Controlador para eliminar un producto
const deleteProduct = (req, res) => {
  const productId = req.params.id;

  Producto.deleteProductById(productId, (err, result) => {
    if (err) {
      console.error('Error al eliminar producto:', err);
      return res.status(500).json({ success: false, mensaje: 'Error al eliminar el producto' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, mensaje: 'Producto no encontrado' });
    }
    res.json({ success: true, mensaje: 'Producto eliminado correctamente' });
  });
};

module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct
};
